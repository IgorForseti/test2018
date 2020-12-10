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
                            <h3>Create position</h3>
                        </div>
                        <form method="post" role="form" action="{{ route('positions.update', $position->id) }}">
                            @csrf
                            @method('PUT')
                            <div class="form-group">
                                <label for="name">Current position: {{ $position->name }}</label>
                                <input type="text" id="inputName" name="name" class="form-control @error('name') is-invalid @enderror" value="{{ $position->name }}">
                            </div>
                            <div class="form-group">
                                <div class="col-12">
                                    <span class="float-left col-5"><b>Created at: </b>{{ date_format($position->created_at, 'd-m-y') }}</span>
                                    <span class="float-right col-5"><b>Admin created ID: </b>{{ $position->admin_created_id }}</span>
                                </div>
                                <div class="col-12">
                                    <span class="float-left col-5"><b>Updated at: </b>{{ date_format($position->created_at, 'd-m-y') }}</span>
                                    <span class="float-right col-5"><b>Admin updated ID: </b>{{ $position->admin_updated_id }}</span>
                                </div>
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

    @push('scripts')
        <script type="text/javascript">
            var maxCount = 256,
                minCount = 3;

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