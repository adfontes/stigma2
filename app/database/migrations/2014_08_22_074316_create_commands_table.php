<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCommandsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('commands', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('object_uuid', 128);
			$table->string('command_line', 1024);
			$table->timestamps();

			$table->foreign('object_uuid')
				->references('uuid')->on('objects')
				->onDelete('cascade');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('commands');
	}

}
