<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Donatur extends Model
{
    use HasFactory;
    use softDeletes;

    protected $fillable = [
        'nama', 'alamat', 'nik', 'no_telp', 'kategori', 'jabatan'
    ];
}
