<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use App\Admin;
use App\User;
use App\Product;
use Auth;
class OrderController extends Controller
{
    public function Saveorder(Request $request){
    	
    	$request->validate([
    		"firstname"=>"required",
    		"lastname"=>"required",
    		"number"=>"required|max:12",
    		"email"=>"required",
    		"address"=>"required",
    		"country"=>"required",
    	]);
    	$order=new Order;
    	$order->firstname=$request->firstname;
    	$order->lastname=$request->lastname;
    	$order->number=$request->number;
    	$order->email=$request->email;
    	$order->country=$request->country;
    	$order->address=$request->address;
    	$order->product_id=$request->product_id;
    	$order->user_id=Auth::id();  
    	$order->quantity=$request->quantity;
    	//return Auth::id();
    	$order->save();
    	return "Succesfully saved";

    }
    public function Showorder(){
    	return Order::with(['product'])->get();

    	
    	
    }
    public function show($id)
    {
        $raworder=Order::find($id);
        $product=Product::find($raworder->product_id)->name;
        $price=Product::find($raworder->product_id)->price;
        $order=[
        	"id"=>$raworder->id,
        	"firstname"=>$raworder->firstname,
        	"lastname"=>$raworder->lastname,
        	"email"=>$raworder->email,
        	"user_id"=>$raworder->user_id,
        	"country"=>$raworder->country,
        	"quantity"=>$raworder->quantity,
        	"number"=>$raworder->number,
        	"address"=>$raworder->address,
        	"product"=>$product,
        	"price"=>$price,
        	"totalprice"=>$raworder->quantity*$price
         ];
         return $order;


    }
    public function OrderDone(Request $request,$id){
    	$order=Order::find($id);
    	$order->order_status=true;
    	$order->save();
    	return "updated!";
    }
    //respective user order
    public function showOrders(User $user)
    {
        return response()->json($user->orders()->with(['product'])->get(),200);
    }
}
