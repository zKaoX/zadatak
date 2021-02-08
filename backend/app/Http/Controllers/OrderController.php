<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

use App\Models\Order;

class OrderController extends Controller
{
    /**
     * Store given orders.
     * 
     * Orders are given in request as json with key orders.
     * Each order has keys shoes_id, buyer_name, delivery_adress and buyer_email.
     */
    public function store(Request $request) {
        $orders = $request->get('orders'); 
        
        DB::transaction(function () use( $orders ) {
            foreach ($orders as $o) {
                $order = new Order();
                $order->shoe_id = $o["shoe_id"];
                $order->buyer_name = $o["buyer_name"];
                $order->delivery_adress = $o["delivery_adress"];
                $order->buyer_email = $o["buyer_email"];
                $order->save();
            }    
        });       
    }
}
