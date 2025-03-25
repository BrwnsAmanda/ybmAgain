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

Route::prefix('/pendidikan')->group(function(){
    Route::prefix('/myscholarship')->group(function(){
        Route::get('/', [MyScholarshipController::class, 'index']);
        Route::get('/{id}', [MyScholarshipController::class, 'show']);
        Route::post('/create', [MyScholarshipController::class, 'store']);
        Route::put('/{id}', [MyScholarshipController::class, 'update']);
        Route::delete('/{id}', [MyScholarshipController::class, 'destroy']);
    });

    Route::prefix('/smartscholarship')->group(function(){
        Route::get('/', [SmartScholarshipController::class, 'index']);
        Route::get('/{id}', [SmartScholarshipController::class, 'show']);
        Route::post('/create', [SmartScholarshipController::class, 'store']);
        Route::put('/{id}', [SmartScholarshipController::class, 'update']);
        Route::delete('/{id}', [SmartScholarshipController::class, 'destroy']);
    });

    Route::prefix('/brightscholarship')->group(function(){
        Route::get('/', [BrightScholarshipController::class, 'index']);
        Route::get('/{id}', [BrightScholarshipController::class, 'show']);
        Route::post('/create', [BrightScholarshipController::class, 'store']);
        Route::put('/{id}', [BrightScholarshipController::class, 'update']);
        Route::delete('/{id}', [BrightScholarshipController::class, 'destroy']);
    });

    Route::prefix('/paketpendidikan')->group(function(){
        Route::get('/', [PaketPendidikanController::class, 'index']);
        Route::get('/{id}', [PaketPendidikanController::class, 'show']);
        Route::post('/create', [PaketPendidikanController::class, 'store']);
        Route::put('/{id}', [PaketPendidikanController::class, 'update']);
        Route::delete('/{id}', [PaketPendidikanController::class, 'destroy']);
    });
});

require __DIR__.'/auth.php';
