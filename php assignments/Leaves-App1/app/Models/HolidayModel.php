<?php

namespace App\Models;

use CodeIgniter\Model;

class HolidayModel extends Model
{
    protected $table = 'public_holidays';

    protected $allowedFields = ['holiday_date','holiday_reason'];
}