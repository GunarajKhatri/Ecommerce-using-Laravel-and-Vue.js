<?php
use Illuminate\Support\Facades\Route;
/*Route::get('/admin/home', function () {
    return view('admin.homepage');
});*/
Route::get('admin/{any}', function () {
    return view('admin.login');
})->where('any','.*');

Route::get('/admin/login', function () {
    return view('admin.login');
});
Route::get('/', function () {
    return view('Frontside.homepage');
});
Route::get('/{name}', function () {
    return redirect('/');
})->where('name','.*');


Route::get('/{any}',function(){
	return view('main');
})->where('any','[A-Za-z]+');
/*Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');*/