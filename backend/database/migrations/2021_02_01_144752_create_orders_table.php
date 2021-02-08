<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('shoe_id')->unsigned()->index();
            $table->string('buyer_name');
            $table->string('delivery_adress');
            $table->string('buyer_email');
          
            $table->foreign('shoe_id')
                  ->references('id')
                  ->on('shoes')
                  ->onDelete('cascade')
                  ->onUpdate('cascade');
        });

        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
