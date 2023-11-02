<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
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
Route::post("/login", [AuthController::class, "login"]);

Route::get("/", [HomeController::class, 'index'])->name('client');

Route::prefix('admin')->group(function () {
    Route::get("/", [HomeController::class, "adminIndex"]);
    Route::resource("/products", ProductController::class);
    Route::resource("/category", CategoryController::class);
});