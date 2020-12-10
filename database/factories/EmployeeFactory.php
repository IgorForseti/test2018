<?php

namespace Database\Factories;

use App\Models\Employee;
use App\Models\Position;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Employee::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $positions = Position::count()-1; // Последний директор. Он будет 1 и его сделаем отдельно

        return [
            'name' => $this->faker->name,
            'position_id' => mt_rand(1,$positions),
            //            'position_id' => 36, отдельно для формирования 1 директора
            'date_of_emploment' => $this->faker->date('Y-m-d','-30y', 'today'),
            'phone' => $this->faker->phoneNumber,
            'email' => $this->faker->unique()->safeEmail,
//            'salary' => $this->faker->randomFloat(2, 0, 500000), если нужна ЗП с копейками
            'salary' => $this->faker->randomFloat(0, 0, 500000),
            'photo' => $this->faker->imageUrl(300, 300, 'cats', true, 'Faker', true),
            'head' => $this->faker->randomFloat(0, 1, 49999),
            'admin_created_id' => 111,
            'admin_updated_id' => 111,
        ];
    }


}
