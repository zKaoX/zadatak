<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shoe;

class ShoeController extends Controller
{
    /**
     * Produce array of shoes where each shoes has keys
     * id, name, price and image. 
     */
    public function index() {
        // Transform image route into link.
        $result = Shoe::all()->toArray();
        $result = array_map(function($el) {
            $image = request()->getSchemeAndHttpHost() . $el['image_route'];

            return [
                'id' => $el['id'],
                'name' => $el['name'],
                'price' => $el['price'],
                'image' => $image,   
            ];
        }, $result);

        // https://stackoverflow.com/questions/32056940/how-to-deal-with-backslashes-in-json-strings-php
        // Disables escaping forwardslashes.
        $result = json_encode($result, JSON_UNESCAPED_SLASHES);
        
        return $result;
    }
}
