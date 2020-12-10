@extends('layouts.layout')
@section('title')
    {{ "Test Task => Positions" }}
@endsection
@section('content')
    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <div class="col-3 float-left"><h1 class="card-title ">Positions</h1></div>
                            <div class="col-9 float-right"><a href="{{ route('positions.create') }}"><button type="submit" class="btn btn-secondary float-right ">Add position
                                    </button></a> </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="example1" class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Last update</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($positions as $value)
                                    <tr>
                                        <td>{{ $value->name }}</td>
                                        <td>{{ $value->updated_at }}</td>
                                        <td>

                                            <a href="{{ route('positions.edit', ['position' => $value->id]) }}"
                                               class="btn btn-info btn-sm float-left">
                                                <i class="fas fa-pencil-alt"></i>
                                            </a>
                                            <form action="{{ route('positions.destroy', ['position' => $value->id]) }}"
                                                  method="post" class="float-left">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger btn-sm"
                                                        onclick="return confirm(`Are you sure you want to remove position '{{$value->name}} ?`)">
                                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
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



