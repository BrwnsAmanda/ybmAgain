<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Penerima extends Model
{
    /** @use HasFactory<\Database\Factories\PenerimaFactory> */
    use HasFactory;
    use softDeletes;

    protected $fillable = [
        'nama', 'nik', 'kategori', 'alamat', 'no_telp'
    ];
}
