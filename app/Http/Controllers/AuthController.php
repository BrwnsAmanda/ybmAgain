<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $hardcodedEmail = 'admin@example.com';
        $hardcodedPassword = 'password123';

        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
        

        if (
            $request->email === $hardcodedEmail &&
            $request->password === $hardcodedPassword
        ) {
            Session::put('is_logged_in', true);
            Session::put('user_email', $request->email);
            return response()->json(['message' => 'Login berhasil!'], 200);
        }

        return response()->json(['error' => 'Email atau password salah.'], 401);
    }

    public function logout()
    {
        Session::flush();
        return redirect('/login');
    }
}

