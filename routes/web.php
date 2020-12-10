<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\PositionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AjaxController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [MainController::class, 'index'])->name('home');

Route::middleware('auth')->group(function () {
    Route::resource('/employees', EmployeeController::class);
    Route::resource('/positions', PositionController::class);
    Route::get('/logout', [UserController::class, 'logout'])->name('logout');
});

Route::middleware('guest')->group(function () {
    Route::get('/login', [UserController::class, 'loginForm'])->name('login.form');
    Route::post('/login', [UserController::class, 'login'])->name('login');
    Route::get('/registration', [UserController::class, 'create'])->name('user.create');
    Route::post('/registration', [UserController::class, 'store'])->name('user.store');
});





