@extends('layouts.layout')
@section('content')
    <section class="content">
        <div class="row">
            <div class="col-md-6">
                <div class="card-header">
                    <h1>Positions</h1>
                </div>
                <div class="card">

                    <div class="card-body">
                        <div class="card-subtitle">
                            <h3>Add position</h3>
                        </div>
                        <form method="post" role="form" action="{{ route('positions.store') }}">
                            @csrf
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" name="name" class="form-control">
                            </div>
                            <div class="col-5 float-right">
                                <a href="{{ route('positions.index') }}" class="btn btn-default ">Cancel</a>
                                <input type="submit" value="Save" class="btn btn-secondary float-right">
                            </div>
                        </form>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
        </div>
        <div class="row">

        </div>
    </section>
@endsection('content')