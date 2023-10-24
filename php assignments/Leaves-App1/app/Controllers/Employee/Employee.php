<?php

namespace App\Controllers\Employee;

use App\Models\EmployeeModel as EModel;
use App\Models\LeavesModel as LModel;
use App\Controllers\BaseController;

class Employee extends BaseController
{

    public function index()
    {
        echo 'Employee page';
    }

    public function login()
    {
        $login['type'] = 'employee';
        return view('templates/Login', $login);
    }

    public function authenticate()
    {
        $session = session();
        $employee = new EModel();
        $employee_credentials = $employee->where('employee_email', $_POST['email'])->where('employee_password', sha1($_POST['password']))->first();
        if ($employee_credentials) {
            if (!$employee_credentials['employee_first_login']) {
                $session->set(
                    array(
                        'logged_in' => false,
                        'user_type' => 'employee',
                        'user_role' => $employee_credentials['employee_role'],
                        'email' => $employee_credentials['employee_email'],
                        'id' => $employee_credentials['employee_id'],
                    )
                );
                return view('/templates/Employees/EmployeeUpdatePassword');
            } else {
                $session->set(array(
                    'logged_in' => true,
                    'user_type' => 'employee',
                    'user_role' => $employee_credentials['employee_role'],
                    'email' => $employee_credentials['employee_email'],
                    'id' => $employee_credentials['employee_id'],
                ));
                return redirect()->to('/employee/dashboard');
            }
        } else {
            $session->logged_in = false;
            return redirect()->to('/employee/login');
        }
    }

    public function dashboard()
    {
        $session = session();
        if ($session->logged_in && $session->user_type === 'employee') {
            return view('layouts/index');
        } else {
            return redirect()->to('/employee/login');
        }
    }

    public function updatePassword()
    {
        if ($_POST['update-password-1'] === $_POST['update-password-2']) {
            $model = new EModel();
            $session = session();
            $data = $model->find($session->id);
            $data['employee_password'] = sha1($_POST['update-password-1']);
            $data['employee_first_login'] = 1;
            $model->save($data);
            $session->logged_in = true;
            return redirect()->to('/employee/dashboard');
        } else {
            return view('/templates/Employees/EmployeeUpdatePassword');
        }
    }

    public function profile()
    {
        $model = new EModel();
        $session = session();
        $data['item'] = $model->find($session->id);
        if ($session->logged_in) {
            return view('/templates/Employees/EmployeeProfile', $data);
        } else {
            return redirect()->to('/employee/login');
        }
    }
    public function update()
    {
        $session = session();
        $id = $session->get('id');
        $model = new EModel();
        if ($this->request->getPost()) {
            $rules = [
                'employee_phoneno' => [
                    'rules' => "required|numeric|regex_match[^[6789]{1}[0-9]{9}$]",
                    'label' => 'Phone Number'
                ],
                'employee_name' => [
                    'rules' => 'required',
                    'label' => 'Name'
                ],
                'employee_marital_status' => [
                    'rules' => 'required',
                    'label' => 'Marital Status'
                ],
                'employee_dob' => [
                    'rules' => 'required',
                    'label' => 'Date Of Birth'
                ]
            ];
            $session = session();
            $session->setFlashdata('updated_data', $_POST);
            if ($this->validate($rules)) {
                $model->update($id, $_POST);
                echo 'updated Succesfully';
            } else {
                $errors = [];
                $errors['validation'] = $this->validator;
                return view('UpdateForm', $errors);
            }
        } else {
            $data['user_details'] = $model->find($id);
            return view('/templates/Employees/EmployeeUpdateDetails', $data);
        }
    }
    public function apply()
    {
        $session = session();
        if ($session->logged_in) {
            if ($this->request->getPost()) {
                $model = new LModel();
                $session = session();
                $_POST['employee_id'] = $session->id;
                if ($_POST['to_date'] === '') {
                    echo 'to date is going to be set';
                    $_POST['to_date'] = $_POST['from_date'];
                }
                $model->save($_POST);
                return redirect()->to('/employee/dashboard');
            } else {
                $model = new EModel();
                $data = [];
                $data['managers'] = $model->where('employee_role', 'Manager')->where('employee_id !=', $session->id)->findAll();
                return view('/templates/Employees/EmployeeLeaveForm', $data);
            }
        } else {
            return redirect()->to('/employee/login');
        }
    }

    public function displayLeaves($status)
    {
        $session = session();
        $LeaveModel = new LModel();
        $EmployeeModel = new EModel();
        if ($status !== 'history') {
            $data['data'] = $LeaveModel->where('manager_id', $session->id)->where('leave_status', $status)->findAll();
        } else {
            $data['data'] = $LeaveModel->where('manager_id', $session->id)->findAll();
        }
        $rowsData['data'] = [];
        $rows = [];
        foreach ($data['data'] as $item) {
            $rows['id'] = $item['leave_id'];
            $rows['from'] = $item['from_date'];
            $rows['to'] = $item['to_date'];
            $rows['leave_type'] = $item['typeOfLeave'];
            $rows['reason'] = $item['reason'];
            $rows['status'] = $item['leave_status'];
            $rows['emp_id'] = $item['employee_id'];
            $rows['rejection_message'] = $item['rejection_message'];
            $emp_data = $EmployeeModel->find($rows['emp_id']);
            $rows['emp_name'] = $emp_data['employee_name'];
            $rows['emp_email'] = $emp_data['employee_email'];
            $rows['emp_gender'] = $emp_data['employee_email'];
            $rows['emp_phone'] = $emp_data['employee_phoneno'];
            array_push($rowsData['data'], $rows);
        }
        return view('/templates/Employees/EmployeesLeaveRequests', $rowsData);
    }

    public function accept($id)
    {
        $LeaveModel = new LModel();
        $LeaveModel->where('leave_id', $id)->set('leave_status', 'accepted')->update();
        return redirect()->to('/employee/dashboard/leave-requests/options/accepted');
    }
    public function reject($id)
    {
        $data['data'] = array("leave_id" => $id);
        return view('/templates/Employees/EmployeeRejectionForm', $data);
    }

    public function rejectionMessage($id)
    {
        $LeaveModel = new LModel();
        $rejectMessage = $_POST['rejection'];
        $LeaveModel->where('leave_id', $id)->set('leave_status', 'rejected')->set('rejection_message', $rejectMessage)->update();
        return redirect()->to('/employee/dashboard/leave-requests/options/rejected');
    }

    public function employeeLeavesDisplay($status)
    {
        $session = session();
        $LeaveModel = new LModel();
        $EmployeeModel = new EModel();
        if ($status !== 'history') {
            $data['data'] = $LeaveModel->where('employee_id', $session->id)->where('leave_status', $status)->findAll();
        } else {
            $data['data'] = $LeaveModel->where('employee_id', $session->id)->findAll();
        }
        $rowsData['data'] = [];
        $rows = [];
        foreach ($data['data'] as $item) {
            $rows['id'] = $item['leave_id'];
            $rows['from'] = $item['from_date'];
            $rows['to'] = $item['to_date'];
            $rows['leave_type'] = $item['typeOfLeave'];
            $rows['reason'] = $item['reason'];
            $rows['status'] = $item['leave_status'];
            $rows['manager_id'] = $item['manager_id'];
            $rows['emp_id'] = $item['employee_id'];
            $rows['rejection_message'] = $item['rejection_message'];
            $emp_data = $EmployeeModel->find($rows['manager_id']);
            $rows['emp_name'] = $emp_data['employee_name'];
            $rows['emp_email'] = $emp_data['employee_email'];
            $rows['emp_gender'] = $emp_data['employee_email'];
            $rows['emp_phone'] = $emp_data['employee_phoneno'];
            array_push($rowsData['data'], $rows);
        }
        return view('/templates/Employees/EmployeesLeaveRequests', $rowsData);
    }
}
