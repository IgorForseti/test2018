<?php

namespace Database\Seeders;

use App\Models\Employee;
use Database\Factories\EmployeeFactory;
use Illuminate\Database\Seeder;
use Faker;

class EmployeesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        Employee::factory()->count(49989)->create();
        Employee::factory()->count(5000)->create();

//        dd(Employee::factory()->count(30)->create());
    }
}
