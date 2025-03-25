<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PenerimaController;
use App\Http\Controllers\DonaturController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Landing/Landing');
});

Route::get('/lala', function(){
    return Inertia::render('PenerimaList/PenerimaList');
});

Route::get('/about', function () {
    return Inertia::render('About/About');
});

Route::get('/login', function () {
    return Inertia::render('Login/Login');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('/penerima')->group(function(){
    Route::get('/', [PenerimaController::class, 'index']);
    Route::get('/{id}', [PenerimaController::class, 'show']);
    Route::post('/create', [PenerimaController::class, 'store']);
    Route::put('/{id}', [PenerimaController::class, 'update']);
    Route::delete('/{id}', [PenerimaController::class, 'destroy']);
});

Route::prefix('/donatur')->group(function(){
    Route::get('/', [DonaturController::class, 'index']);
    Route::get('/{id}', [DonaturController::class, 'show']);
    Route::post('/create', [DonaturController::class, 'store']);
    Route::put('/{id}', [DonaturController::class, 'update']);
    Route::delete('/{id}', [DonaturController::class, 'destroy']);
});

/*Route::prefix('/pendidikan')->group(function(){
    Route::prefix('/')
})*/

require __DIR__.'/auth.php';
