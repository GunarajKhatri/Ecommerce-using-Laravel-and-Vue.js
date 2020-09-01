<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use App\Category;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name'=>$faker->word,
        'description'=>$faker->paragraph,
        'price'=>$faker->numberBetween(100,100),
        'stock'=>$faker->randomDigit,
        'category_id'=>function(){
        	return Category::all()->random();
        },
        'image'=>'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png'

    ];
});
