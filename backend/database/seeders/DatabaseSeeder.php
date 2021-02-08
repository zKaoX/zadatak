<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use \App\Models\Shoe;
use \App\Models\Order;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        /* Add shoes */
        $shoes = [
            ['name' => 'shoe 1', 'price' => 11, 'image_route' => '/images/shoes/shoe_1.jpg'],
            ['name' => 'shoe 2', 'price' => 22, 'image_route' => '/images/shoes/shoe_2.jpg'],
            ['name' => 'shoe 3', 'price' => 33, 'image_route' => '/images/shoes/shoe_3.jpg'],
            ['name' => 'shoe 4', 'price' => 44, 'image_route' => '/images/shoes/shoe_4.jpg'],
        ];
        foreach ($shoes as $shoe) {
            Shoe::create($shoe);
        }

        /* Add orders */
        $orders = [
            ['shoe_id' => 1, 'buyer_name' => 'buyer a', 'delivery_adress' => 'a1', 'buyer_email' => 'a@z.com'],
            ['shoe_id' => 1, 'buyer_name' => 'buyer b', 'delivery_adress' => 'b2', 'buyer_email' => 'a@z.com'],
            ['shoe_id' => 3, 'buyer_name' => 'buyer a', 'delivery_adress' => 'c1', 'buyer_email' => 'a@z.com'],
        ];
        foreach ($orders as $order) {
            Order::create($order);
        }
    }
}
