<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function renderLogin(Request $request)
    {
        return Inertia::render("login");
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            "username" => "required",
            "password" => "required",
        ]);

        if (Auth::attempt($credentials)) {

            if (auth()->user()->isAdmin) {
                $request->session()->regenerate();
                return redirect('/admin');
            }
            return Inertia::render("/");
        }

        return redirect()->back();
    }
}