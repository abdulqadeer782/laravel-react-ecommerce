<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get("/login", [AuthController::class, "renderLogin"])->name("login-page");

Route::get("/", [HomeController::class, 'index']);

Route::middleware(["isAdmin"])->prefix('admin')->group(function () {
    Route::get("/", [HomeController::class, "index"])->name("landing-page");
})->name('admin');