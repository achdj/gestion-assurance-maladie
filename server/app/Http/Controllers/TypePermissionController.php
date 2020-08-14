<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TypePermission;

class TypePermissionController extends Controller
{
    public function index(){
        return TypePermission::all();
    }

    public function show($IdTypePermission){
        return TypePermission::find($IdTypePermission);
    }

    public function store(Request $request, $IdTypePermission){
        $typepermission = TypePermission::findOrFail($IdTypePermission);
        $typepermission->update($request->all());

        return $typepermission;
    }

    public function delete(Request $request, $IdTypePermission){
        $typepermission = TypePermission::findOrFail($IdTypePermission);
        $typepermission->delete();

        return 204;
    }
}
