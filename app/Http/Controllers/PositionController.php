<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Position;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class PositionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $positions = Position::all();

        return view('positions.index', compact('positions'));
        //*********************************** Заполнение справочной таблицы *************************************************
//        $Positions = [
//            'Junior Bussiness Analyst', 'Bussiness Analyst', 'Senior Bussiness Analyst',
//            'Junior Business Relationship Manager', 'Business Relationship Manager', 'Senior Business Relationship Manager',
//            'Junior Service Manager', 'Service Manager', 'Senior Service Manager',
//            'Junior Development Manager', 'Development Manager', 'Senior Development Manager',
//            'Junior Quality Manager', 'Quality Manager', 'Senior Quality Manager',
//            'Junior Sourcing Manager', 'Sourcing Manager', 'Senior Sourcing Manager',
//            'Junior Developer', 'Developer', 'Senior Developer',
//            'Junior SEO', 'SEO', 'Senior SEO',
//            'Junior Linkbuilder', 'Linkbuilder', 'Senior Linkbuilder',
//            'Junior Support', 'Support', 'Senior Support',
//            'Team Lead', 'Project Manager', 'Business Process Owner', 'Business Lead',
//        ];
//        ----- Запись в справочную таблицу будущих должностей
//        foreach ($Positions as $key => $pos) {
//            $users = DB::insert('insert into positions (name, admin_created_id, admin_updated_id, created_at, updated_at) values (?, ?, ?, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP())', [$pos, 111, 111]);
//        ------ Директора отдельно после посева работников. Чтобы был только 1
//        $users = DB::insert('insert into positions (name, admin_created_id, admin_updated_id, created_at, updated_at) values (?, ?, ?, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP())', ['Director', 111, 111]);
//*********************************** Конец заполнения справочной таблицы *************************************************
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('positions.create');
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
            'name' => 'required | max:256 | unique:positions',
        ]);

        $request['admin_created_id'] = Auth::user()->id;
        $request['admin_updated_id'] = Auth::user()->id;
        Position::create($request->all());

        return redirect()->route('positions.index')->with('success', 'Position create success');
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
        $position = Position::find($id);
        if ($position)
            return view('positions.edit', compact('position'));
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
            'name' => 'required | max:256 | unique:positions',
            'admin_created_id' => 'numeric',
            'admin_updated_id' => 'numeric',
        ]);

        $position = Position::find($id);
        $position['admin_updated_id'] = Auth::user()->id;

        $position->update($request->all());

        return redirect()->route('positions.index')->with('success', 'Update success');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $position = Position::find($id);

        Position::deletePosition($id);
        $position->delete();

        return redirect()->route('positions.index')->with('success', 'Position remove success');
    }
}
