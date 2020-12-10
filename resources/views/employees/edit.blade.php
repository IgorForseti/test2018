@extends('layouts.layout')

@section('title')
    {{ "Test Task => Edit employee" }}
@endsection

@section('content')



<section class="content">
        <div class="row">
            <div class="col-md-6">
                <div class="card-header ">
                    <h3>Employees list</h3>
                </div>
                <div class="card">
                    <div class="card-body">
                        <form role="form" method="post"  action="{{ route('employees.update', $employee->id) }}" enctype="multipart/form-data" id="form">
                            @csrf
                            @method('PUT')
                            {{--<div class="input-group">--}}

                            {{--</div>--}}
                            <div class="input-group">
                                <div class="form-group">
                                    <div class="img-thumbnail col-12 text-center" >
                                        <img class="img-circle img-bordered-sm" width="300" height="300"
                                             src="@if(!file_exists(asset($employee->photo))){{asset($employee->photo)}}
                                             @else{{$employee->photo}}@endif">
                                    </div>
                                    <label for="photo">Photo</label>
                                    <div class="input-group">
                                        <div class="custom-file col-12">
                                            <input type="file" class="custom-file-input form-control @error('photo') is-invalid @enderror" id="photo" name="photo">
                                            <label class="custom-file-label" for="photo"></label>
                                        </div>
                                        <div class="col-12 small text-muted"><span>File format: jpg, png up to 5MB, the
                                            min size of 300x300px</span></div>
                                    </div>
                                </div>
                            </div>

                            <!-- /.card-body -->
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="inputName" name="name" class="form-control @error('name') is-invalid @enderror" value="{{ $employee->name }}">
                            </div>
                            <div class="form-group">
                                <span id="symbolName"></span>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone</label>
                                <input type="text" class="bfh-phone form-control @error('phone') is-invalid @enderror" data-country="UA" name="phone" value="{{$employee->phone}}">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="text" id="email" name="email" class="form-control @error('email') is-invalid @enderror" value="{{$employee->email}}">
                            </div>
                            <div class="form-group">
                                <label for="position_id">Position</label>
                                <select class="form-control select2" style="width: 100%;" name="position_id">
                                    @foreach($positions as $position)
                                        <option value="{{ $position->id }}" @if($employee->position->name == $position->name)selected @endif>{{ $position->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="salary">Salary, $</label>
                                <input type="text" id="salary" class="form-control @error('salary') is-invalid @enderror" name="salary" value="{{$employee->salary}}">
                            </div>
                            <div class="form-group">
                                <label for="head">Head</label>
                                <select class="select2 form-control @error('head') is-invalid @enderror" style="width: 100%;" name="head"
                                        value="{{old('head')}}">
                                    @foreach($heads as $key => $head)
                                        <option @if($employee->head == $head) selected @endif value="{{ $key }}">{{ $head}}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="date_of_emploment">Date of emploment</label>
                                <input type="date" id="date_of_emploment" class="form-control" name="date_of_emploment" value="{{ $employee->date_of_emploment }}">
                            </div>
                            <div class="form-group">
                                <div class="col-12">
                                    <span class="float-left col-5"><b>Created at: </b>{{ date_format($employee->created_at, 'd-m-y') }}</span>
                                    <span class="float-right col-5"><b>Admin created ID: </b>{{ $employee->admin_created_id }}</span>
                                </div>
                                <div class="col-12">
                                    <span class="float-left col-5"><b>Updated at: </b>{{ date_format($employee->created_at, 'd-m-y') }}</span>
                                    <span class="float-right col-5"><b>Admin updated ID: </b>{{ $employee->admin_updated_id }}</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="float-right col-4 pt-4">
                                    <a href="{{ route('employees.index') }}" class="btn btn-default ">Cancel</a>
                                    <input type="submit" value="Save" class="btn btn-secondary float-right">
                                </div>
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
    @push('scripts')
        <script type="text/javascript">
            var maxCount = 256;

            $(document).ready(function(){
                $('#inputName').change(function (event) {

                    var count = $(this).val().length; // кол-во уже введенных символов
                    var num = maxCount - count;

                    if(num > 0){
                        $('#symbolName').text(count + "/" + maxCount);
                        $('#inputName').removeClass("is-invalid");
                    }else {
                        $('#symbolName').text(count + "/" + maxCount);
                        $('#inputName').addClass("is-invalid");
                    }
                }) ;
            });
        </script>
    @endpush
@endsection('content')