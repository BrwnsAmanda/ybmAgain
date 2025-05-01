<?php

namespace Database\Seeders;

use App\Models\Donatur;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class DonaturSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create('id_ID');

        for ($i = 0; $i < 25; $i++) {
            Donatur::create([
                'nama' => $faker->name,
                'alamat' => $faker->address,
                'nik' => $faker->nik(),
                'no_telp' => $faker->phoneNumber,
                'kategori' => $faker->randomElement(['Pendidikan', 'Kesehatan', 'Dakwah', 'Sosial Kemanusiann', 'Ekonomi']),
                'jabatan' => $faker->jobTitle,
            ]);
        }
    }
}
