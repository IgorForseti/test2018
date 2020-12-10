<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('position_id')->unsigned();
            $table->date('date_of_emploment');
            $table->string('phone');
            $table->string('email');
            $table->decimal('salary', 8, 2)->unsigned();
            $table->string('photo')->nullable();
            $table->integer('head')->unsigned();
            $table->timestamps();
            $table->integer('admin_created_id')->unsigned();
            $table->integer('admin_updated_id')->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
