<?php

namespace App\Models;

use CodeIgniter\Model;

class AdminModel extends Model
{
    protected $table = 'admin_credentials';
    protected $primaryKey = 'id';
    protected $allowedFields = ["admin_email", "admin_password"];
}
