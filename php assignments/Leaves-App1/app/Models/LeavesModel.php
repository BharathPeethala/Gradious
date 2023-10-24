<?php

namespace App\Models;

use CodeIgniter\Model;

class LeavesModel extends Model
{

    protected $table = 'leaves_details';

    protected $allowedFields = ['noOfDays', 'from_date', 'to_date', 'typeOfLeave', 'manager_id', 'reason', 'employee_id', 'leave_status', 'leave_id', 'rejection_message'];
}
