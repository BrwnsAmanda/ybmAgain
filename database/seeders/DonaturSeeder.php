<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class DonaturSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        for($i = 1; $i <= 20; $i++){
            DB::table('donaturs') -> insert ([
                    'nama' => $faker -> name,
                    'nik' => $faker -> numerify('###########'),
                    'jabatan' => $faker -> jobTitle,
                    'kategori' => $faker -> randomElement(['Pendidikan', 'Ekonomi', 'Dakwah', 'Sosial Kemanusiaan', 'Kesehatan']),
                    'alamat' => $faker -> address,
                    'no_telp' => $faker -> phoneNumber
                ]);
        }
    }
}
