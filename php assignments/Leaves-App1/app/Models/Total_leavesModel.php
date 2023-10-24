<?php

namespace App\Models;

use CodeIgniter\Model;

class Total_leavesModel extends Model
{

    protected $table = 'yearly_leaves';

    protected $allowedFields = ['id','sick_leave','emergency_leave','personal_leave',
    'paternity_leave','maternity_leave'];
    public function getLeavesdata($id=1)
    {
        // ruturn $this->where('',$type)->findall();
        return $this->select($_POST['typeOfLeave'])->findall();
    }
}