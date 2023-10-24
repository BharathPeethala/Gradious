<?php

namespace App\Models;

use CodeIgniter\Model;

class EmployeeModel extends Model
{
    protected $table = 'employees';

    protected $primaryKey = 'employee_id';

    protected $allowedFields = ['employee_name', 'employee_email', 'employee_password', 'employee_role', 'employee_phoneno', 'employee_gender', 'employee_marital_status', 'employee_first_login', 'employee_is_delete', 'employee_dob'];

    public function getEmployees($type = null)
    {
        return $this->where('employee_role', $type)->findall();
    }
}
