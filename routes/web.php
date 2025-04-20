<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Landing/Landing');
});

Route::get('/about', function () {
    return Inertia::render('About/About'); // Pastikan nama halaman sesuai dengan file About.jsx
});

Route::get('/login', function () {
    return Inertia::render('Login/Login'); // Pastikan ada file Login.jsx di dalam Pages
});

Route::prefix('/penerima-list')->group(function(){
    Route::get('/', function() {
        return Inertia::render('PenerimaList/PenerimaList');
    });
});

Route::get('/laravel', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/lala', function(){
    return Inertia::render('PenerimaList/PenerimaList');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
