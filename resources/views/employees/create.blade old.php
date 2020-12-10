@extends('layouts.layout')

@section('title')
    {{ "Test Task => Create employee" }}
@endsection

@section('content')
    <section class="content m-0 p-0">
        <div class="row m-0 p-0" >
            <div class="col-md-6">
                <div class="card-header">
                    <h1>Employee</h1>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="pb-2">
                            <h3>Add employee</h3>
                        </div>
                        <form role="form" method="post"  action="{{ route('employees.store') }}" enctype="multipart/form-data">
                            @csrf
                            <div class="form-group">
                                <label for="photo">Photo</label>
                                <div class="input-group">
                                    <div class="custom-file col-12">
                                        <input type="file" class="custom-file-input" id="photo" name="photo">
                                        <label class="custom-file-label" for="photo"></label>
                                    </div>
                                    <div class="col-12 small text-muted"><span>File format: jpg, png up to 5MB, the
                                            min size of 300x300px</span></div>
                                </div>
                            </div>
                            <!-- /.card-body -->
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="inputName" name="name" class="form-control" value="{{old('name')}}">
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone</label>
                                <input type="text" class="form-control bfh-phone" data-country="UA" name="phone" value="{{old('phone')}}">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="text" id="email" name="email" class="form-control" value="{{old('email')}}">
                            </div>
                            <div class="form-group">
                                <label for="position_id">Position</label>
                                <select class="form-control select2" style="width: 100%;" name="position_id">
                                        <option selected disabled>Select position</option>
                                @foreach($positions as $position)
                                        <option value="{{ $position->id }}" >{{ $position->name }}</option>
                                @endforeach
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="salary">Salary, $</label>
                                <input type="text" id="salary" class="form-control" name="salary" value="{{old('salary')}}">
                            </div>
                            <div class="form-group">
                                <label for="head">Head</label>
                                <select class="form-control select2" style="width: 100%;" name="head" id="createHead">
                                    <option selected disabled>Select head</option>
                                @foreach($employees as $key => $employee)
                                    <option value="{{ $key }}" >{{ $employee}}</option>
                                    {{$key . " --- "}}
                                @endforeach
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="date_of_emploment">Date of emploment</label>
                                <input type="date" id="date_of_emploment" class="form-control" name="date_of_emploment">
                            </div>
                            <div class="col-12">
                                <a href="{{ route('employees.index') }}" class="btn btn-default ">Cancel</a>
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