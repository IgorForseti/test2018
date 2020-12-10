<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Position;
use Illuminate\Http\Request;
//use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Intervention\Image\ImageManager;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Employees = Employee::with('position')->simplePaginate(5000);

        return view('employees.index', compact('Employees'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $positions = Position::all();

        return view('employees.create', compact('positions', 'employees'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required | min:2 | max:256',
            'position_id' => 'required | exists:positions,id', // Проверяем а наличие такой категории в справочной таблице
            'date_of_emploment' => 'date',
            'email' => 'email',
            'salary' => ['min:0', 'max:500000', 'numeric'],
            'phone' => 'required | size:14',
            'photo' => ['image', 'dimensions:min_width=300, min_height=300', 'max:5120', 'nullable'],
            'head' => 'exists:employees,name', //наличие такого фио в таблице сотрудников
        ]);

        $employee = Employee::where('name', $request['head'])->first(); //запись по имени
        $data = $request->all();
        $data['head'] = $employee->id;
        $empPosition = Position::find($data['position_id'])->name; //Название должности работника
        $headPosition = Employee::find($data['head'])->name; //Название должности Head
        $validHeads = Employee::getListHead($empPosition); //ID+Name возможных Head по иерархии

        if (array_search($headPosition,$validHeads)) //Head есть в списке возможных исходя из иерархии - сохраняем
        {
            $data['admin_created_id'] = Auth::user()->id;
            $data['admin_updated_id'] = Auth::user()->id;
            $data['photo'] = Employee::uploadImg($request) ? Employee::uploadImg($request) : 'storage/no-image.png';
            Employee::create($data);

            return redirect()->route('employees.index')->with('success', 'Employee create success');
        }
        return redirect()->back()->with('error', 'Head is not correct. Select Head according to the hierarchy');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $employee = Employee::find($id);

        if ($employee) {
            $positions = Position::all();
            $heads = Employee::getListHead($employee->position_id);

            $employee['photo'] = $employee['photo'] ? $employee['photo'] : "storage/no-image.png";

            return view('employees.edit', compact('employee', 'positions', 'heads'));
        }
        abort(404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required | min:2 | max:256',
            'position_id' => 'required',
            'date_of_emploment' => 'date',
            'email' => 'email',
            'salary' => ['min:0', 'max:500000', 'numeric'],
            'phone' => 'required | size:14',
            'photo' => ['image', 'dimensions:min_width=300, min_height=300', 'max:5120'],
            'head' => 'exists:employees,id',
        ]);

        $employee = Employee::find($id);
        $data = $request->all();
        //Если выбрали новое изображение - заменяем картинку
        if(array_key_exists('photo', $data)) {
            $data['photo'] = Employee::uploadImg($request, $employee->photo);
        }

        $data['admin_updated_id'] = Auth::user()->id;
        $employee->update($data);

        return redirect()->route('employees.index')->with('success', 'Edit success');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $employee = Employee::find($id);
//        Переназначаем Head подчиненным
        Employee::reAppointHead($employee->position_id, $employee->id);
//        Удаляем картинку c диска, если это не заглушка "no-image"
        if ($employee->photo != "storage/no-image.png")
            Storage::delete(str_replace("storage/", "",$employee->photo));
//        Удаляем запись в бд
        $employee->delete();

        return redirect()->route('employees.index')->with('success', 'Employee remove success');
    }
}
