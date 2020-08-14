<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TypePermission extends Model
{
    protected $primaryKey= 'IdTypePermission';

    protected $fillable = ['TypePermissionName'];
}
