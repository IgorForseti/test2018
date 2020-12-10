<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
class UserController extends Controller
{
    public function create() {

        return view('users.create');
    }

    public function store(Request $request) {
        $request->validate([
            'name' => 'required | min:3 | max:30',
            'email' => 'required | email | unique:users',
            'password' => 'required | min:4 | max:16 | confirmed',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        Auth::login($user);
        return redirect()->home()->with('success', 'Регистрация успешна');
    }

    public function logout() {

        Auth::logout();
        return redirect()->route('login');
    }

    public function login(Request $request) {

        $request->validate([
            'email' => 'required | email',
            'password' => 'required' ,
        ]);
        if (Auth::attempt([
            'email' => $request->email,
            'password' => $request->password,
        ])){
            session()->flash('success', 'Авторизация успешна');
            return redirect()->route('home');
        }

        return redirect()->back()->with('error', 'Не верный логин или пароль');
    }

    public function loginForm() {
        return view('users.login');
    }
}
