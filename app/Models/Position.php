<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'admin_created_id',
        'admin_updated_id',
        ];

    public function employee() {
        return $this->hasOne() (Employee::class);
    }

    public static function deletePosition($id) {
        $all_position = self::all()->pluck('name','id')->toArray();
        $employeeesPosition = Employee::where('position_id', $id);
        $positions = Employee::getListManager($id);
        //Удаляем директора из массва. Будем считать, что его должность неизменна
        if (array_search("Director", $positions))
            unset($positions[array_search("Director", $positions)]);
        foreach ($employeeesPosition->get() as $e) {
            $position_id = array_search($positions[array_rand($positions)],$all_position);
            $e->update(['position_id' =>$position_id]);
        }
        return true;
    }
}
