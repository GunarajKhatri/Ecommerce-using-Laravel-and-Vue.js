<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:api-admins')->get('/admin', function (Request $request) {
    return $request->user();
});
Route::post('/login','AuthController@login');
Route::post('/register','AuthController@register');
Route::post('/admin/login','AuthController@adminlogin');
Route::post('/admin/register','AuthController@adminregister');
Route::middleware('auth:api')->post('/logout','AuthController@logout');



Route::apiResource('/articles','ArticleController');
Route::apiResource('/categories','CategoryController');
Route::apiResource('/products','ProductController');
Route::get('/category/{id}/products','CategoryController@product');
Route::middleware('auth:api')->post('/order','OrderController@Saveorder');

Route::group(['middleware' => 'auth:api-admins'], function(){
Route::get('/users','AuthController@showalluser');
Route::delete('/users/{user}','AuthController@deleteuser');
Route::post('/admin/logout','AuthController@adminlogout');
Route::get('/order','OrderController@Showorder');
Route::get('/order/{id}','OrderController@show');
Route::patch('/order/{order}','OrderController@OrderDone');
	});

Route::get('users/{user}/orders','OrderController@showOrders');
Route::get('/customer','AuthController@showCustom');