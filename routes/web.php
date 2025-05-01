<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PenerimaController;
use App\Http\Controllers\DonaturController;
use App\Http\Controllers\AuthController;
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

Route::prefix('/penerima-list')->group(function () {
    Route::get('/', [PenerimaController::class, 'index'])->name('penerima.index');
    Route::get('/tambah', [PenerimaController::class, 'create'])->name('penerima.create');
    Route::post('/tambah', [PenerimaController::class, 'store'])->name('penerima.store');
    Route::get('/edit/{id}', [PenerimaController::class, 'edit'])->name('penerima.edit');
    Route::put('/edit/{id}', [PenerimaController::class, 'update'])->name('penerima.update');
    Route::delete('/{id}', [PenerimaController::class, 'destroy'])->name('penerima.destroy');
});

Route::prefix('/donatur-list')->group(function () {
    Route::get('/', [DonaturController::class, 'index'])->name('donatur.index');
    Route::get('/tambah', [DonaturController::class, 'create'])->name('donatur.create');
    Route::post('/tambah', [DonaturController::class, 'store'])->name('donatur.store');
    Route::get('/edit/{id}', [DonaturController::class, 'edit'])->name('donatur.edit');
    Route::put('/edit/{id}', [DonaturController::class, 'update'])->name('donatur.update');
    Route::delete('/{id}', [DonaturController::class, 'destroy'])->name('donatur.destroy');
});

Route::post('/login', [AuthController::class, 'login']);


Route::get('/tambah', function () {
    return Inertia::render('TambahDonatur/TambahDonatur');
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
