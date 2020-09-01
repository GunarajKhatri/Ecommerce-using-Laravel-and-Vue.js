<?php

use Illuminate\Database\Seeder;

class CategoryTableseeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Category::class,20)->create();
    }
}
