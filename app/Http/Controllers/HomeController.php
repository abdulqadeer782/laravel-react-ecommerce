<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('client/index');
    }
    public function adminIndex(Request $request)
    {
        return Inertia::render('admin/index');
    }
}