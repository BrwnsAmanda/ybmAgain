<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class PenerimaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        for($i = 1; $i <= 20; $i++){
            DB::table('penerimas') -> insert ([
                    'nama' => $faker -> name,
                    'nik' => $faker -> numerify('###########'),
                    'kategori' => $faker -> randomElement(['Pendidikan', 'Ekonomi', 'Dakwah', 'Sosial Kemanusiaan', 'Kesehatan']),
                    'alamat' => $faker -> address,
                    'no_telp' => $faker -> phoneNumber
                ]);
        }
    }
}