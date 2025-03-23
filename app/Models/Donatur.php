<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Donatur extends Model
{
    use HasFactory;
    use softDeletes;

    protected $fillable = [
        'nama', 'nik', 'jabatan', 'kategori', 'alamat', 'no_telp'
    ];
}
