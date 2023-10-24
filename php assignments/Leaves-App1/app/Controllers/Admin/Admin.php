<?php

namespace App\Controllers\Admin;

use App\Models\EmployeeModel as EModel;
use App\Models\AdminModel as AModel;
use App\Models\HolidayModel as HModel;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/PHPMailer/src/Exception.php';
require '../PHPMailer/PHPMailer/src/PHPMailer.php';
require '../PHPMailer/PHPMailer/src/SMTP.php';

use App\Controllers\BaseController;

class Admin extends BaseController
{
    public function index()
    {
        echo 'Admin page';
    }

    public function add()
    {
        helper(['form']);
        $session = session();
        if ($session->logged_in && $session->user_type == 'admin') {
            if ($this->request->getPost()) {
                $rules = [
                    'employee_email' => [
                        'rules' => "required|regex_match[^[a-zA-Z0-9+_.-]+@[a-zA-Z.-]+$]",
                        'label' => 'Email Address'
                    ],
                    'employee_name' => [
                        'rules' => 'required',
                        'label' => 'Name'
                    ],
                    'employee_role' => [
                        'rules' => 'required',
                        'label' => 'Role'
                    ],
                    'employee_phoneno' => [
                        'rules' => "required|numeric|regex_match[^[6789]{1}[0-9]{9}$]",
                        'label' => 'Phone Number'
                    ],
                    'employee_gender' => [
                        'rules' => 'required',
                        'label' => 'Gender'
                    ],
                    'employee_marital_status' => [
                        'rules' => 'required',
                        'label' => 'Marital Status'
                    ],
                    'employee_dob' => [
                        'rules' => 'required',
                        'label' => 'Date of Birth'
                    ]

                ];
                $session = session();
                $session->setFlashdata('data', $_POST);
                if ($this->validate($rules)) {
                    $email = $this->request->getPost("employee_email");
                    $char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    $n = strlen($char);
                    $password = "";
                    for ($i = 0; $i < 15; $i++) {
                        $password .= $char[rand(0, $n - 1)];
                    }
                    $password_hash = sha1($password);
                    $_POST["employee_password"] = $password_hash;
                    $model = new EModel();
                    $model->save($_POST);
                    $subject = "These are your submitted details and log in credentials";
                    $message = "<img style='width:auto;height:20rem' src='https://i0.wp.com/letsgetclear.org/wp-content/uploads/2018/11/Thank-you-for-registering.png' alt='Thanks for registering'><br><br><br>\nyour credietials are <br>\n" . " Email:" . $email . "<br>\n Password:" . $password;
                    $mail = new PHPMailer(true);
                    try {
                        $mail->isSMTP();
                        $mail->Host         = 'smtp.gmail.com';
                        $mail->SMTPAuth     = true;
                        $mail->Username     = 'yrsaikrishna@gmail.com';
                        $mail->Password     = 'julotgopvwwxrlsf';
                        $mail->SMTPSecure   = 'ssl';
                        $mail->Port         = 465;
                        $mail->Subject      = $subject;
                        $mail->Body         = $message;
                        $mail->setFrom('yrsaikrishna@gmail.com');
                        $mail->addAddress($email);
                        $mail->isHTML(true);
                        if (!$mail->send()) {
                            echo "Something went wrong. Please try again.";
                        } else {
                            echo $mail->send();
                            // return redirect()->to('/admin/dashboard/add');
                        }
                    } catch (Exception $e) {
                        echo "Something went wrong. Please try again.";
                    }
                } else {
                    $errors = [];
                    $errors['validation'] = $this->validator;
                    return view('/templates/Admin/addUserForm', $errors);
                }
            } else {
                return view('/templates/Admin/addUserForm');
            }
        } else {
            return redirect()->to('/admin/login');
        }
    }

    public function login()
    {
        $login['type'] = 'admin';
        return view('templates/Login', $login);
    }
    public function authenticate()
    {
        $session = session();
        $admin = new AModel();
        $admin_credentials = $admin->where('admin_email', $_POST['email'])->where('admin_password', $_POST['password'])->first();
        if ($admin_credentials) {
            $session->set(array(
                'logged_in' => true,
                'user_type' => 'admin',
                'user_role' => 'admin',
                'email' => $admin_credentials['admin_email'],
                'id' => $admin_credentials['id'],
            ));
            return redirect()->to('/admin/dashboard');
        } else {
            $session->logged_in = false;
            return redirect()->to('/admin/login');
        }
    }

    public function dashboard()
    {
        $session = session();
        if ($session->logged_in && $session->user_type === 'admin') {
            return view('/layouts/index');
        } else {
            return redirect()->to('/admin/login');
        }
    }

    public function view()
    {
        $employees = new EModel();
        $result['data'] = $employees->findAll();
        $session = session();
        if ($session->logged_in) {
            return view('/templates/Employees/EmployeesCard', $result);
        }
    }

    public function delete($id)
    {
        $employees = new EModel();
        $employees->where('employee_id', $id)->set('employee_is_delete', true)->update();
        return redirect()->to('/admin/dashboard/view');
    }

    public function addHoliday()
    {
        if($this->request->getPost())
        {
        $model = new HModel();
        $model->save($_POST);
        echo 'holiday added succesfully';
        }
        else
        {
            return view('holidayForm');
        }
    }
    public function logout()
    {
        $session = session();
        $session->destroy();
        return redirect()->to('/admin/login');
    }
}
