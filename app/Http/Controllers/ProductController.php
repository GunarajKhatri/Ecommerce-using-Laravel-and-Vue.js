<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Product;
use App\Category;
use Symfony\Component\HttpFoundation\Response;
class ProductController extends Controller
{
    public function __construct(){
        $this->middleware('auth:api-admins')->except('index','show');
    }

    public function index()
    {  
        $products=Category::rightJoin('products','products.category_id','categories.id')->select('products.id','products.name','products.description','products.price','products.image','products.stock','products.created_at','products.category_id','categories.category')->paginate(8);
          
        return response()->json($products,200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       $product=new Product;
       $request->validate([
        "name"=>"required",
        "category"=>"required",
        "description"=>"required",
        "price"=>"required|numeric",
        "stock"=>"required|numeric",
        "image"=>"required"
       ]);
       if($request->hasFile('image')){
            $imgname=$request->image->getClientOriginalName();
            $request->image->storeAs('public',$imgname);
            $product->image=$imgname;
        }
        $product->name=$request->name;
        $product->category_id=$request->category;
        $product->description=$request->description;
        $product->stock=$request->stock;
        $product->price=$request->price;
        $product->save();
       return response()->json([
            'message' => 'Product created successfully !'
        ],200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       $product=Product::find($id);
        $product['category']=Product::find($id)->category->category;
        return response()->json($product);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
          
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $product=Product::find($id);
       $request->validate([
        "name"=>"required",
        "category"=>"required",
        "description"=>"required",
        "price"=>"required|numeric",
        "stock"=>"required|numeric",
        "image"=>"required"
       ]);
       if($request->hasFile('image')){
            $imgname=$request->image->getClientOriginalName(); 
            if(Storage::exists($request->image)){
               $product->image=$imgname; 
            }
            else{
            $request->image->storeAs('public',$imgname);
            $product->image=$imgname;
            }
            
        }
        $product->name=$request->name;
        $product->category_id=$request->category;
        $product->description=$request->description;
        $product->stock=$request->stock;
        $product->price=$request->price;
        $product->save();

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
       $product->delete();
         return response(null,Response::HTTP_NO_CONTENT); 
    }
    
}
