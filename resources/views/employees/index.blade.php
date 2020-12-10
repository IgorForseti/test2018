@extends('layouts.layout')

@section('title')
    {{ "Test Task => Employee" }}
@endsection

@section('content')
<!-- Main content -->
<section class="content m-0 p-0">
    <div class="container-fluid m-0 p-0">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <div class="col-3 float-left mt-2"><h1 class="card-header">Employess</h1></div>
                        <div class="col-9 float-right"><a href="{{ route('employees.create') }}"><button type="submit" class="btn btn-secondary float-right ">Add employee
                        </button></a> </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <div class="pb-2">
                            <h3>Employes list</h3>
                        </div>
                        <table id="example1" class="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Date of emploment</th>
                                <th>Phone №</th>
                                <th>Email</th>
                                <th>Salary</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($Employees as $value)
                                <tr>
                                    <td class="pd-0"><img class="img-circle img-bordered-sm" width="35" height="35"
                                                      src="{{asset($value->photo)}}"></td>
                                    <td>{{ $value->name }}</td>
                                    <td>{{ $value->position->name }}</td>
                                    <td>{{ $value->date_of_emploment }}</td>
                                    <td>{{ $value->phone }}</td>
                                    <td>{{ $value->email }}</td>
                                    <td>{{ $value->salary }}</td>
                                    <td>
                                        <a href="{{ route('employees.edit', ['employee' => $value->id]) }}"
                                           class="btn btn-info btn-sm float-left">
                                            <i class="fas fa-pencil-alt"></i>
                                        </a>
                                        <form action="{{ route('employees.destroy', ['employee' => $value->id]) }}"
                                              method="post" class="float-left">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-danger btn-sm"
                                                    onclick="return confirm(`Are you sure want to remove employee '{{$value->name}} ?`)">
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>

                        </table>
                        <div>
                            <p>Отдельная пагинация. Разбивает вывод по 5к (хостинг не может отобразить много){{$Employees->links()}}</p>
                        </div>

                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
            <!-- /.col -->
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
</section>
<!-- /.content -->
@endsection('content')



