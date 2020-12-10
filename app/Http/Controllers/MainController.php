<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Database\Seeders\EmployeesTableSeeder;
use Illuminate\Http\Request;
use Faker;
use Illuminate\Support\Facades\Auth;

class MainController extends Controller
{
    public function index() {
        if (Auth::user()){
            return redirect()->route('employees.index');
        }
        return redirect()->route('login.form');
    }
}
