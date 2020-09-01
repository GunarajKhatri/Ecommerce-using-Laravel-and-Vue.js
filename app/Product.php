<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name', 'description', 'category_id','image','price',
        'stock',
    ];
    public function category(){
    	return $this->belongsTo(Category::class);
    }
    public function orders(){
        return $this->hasMany(Order::class);
    }
}
