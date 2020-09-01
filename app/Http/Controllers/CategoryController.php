<?php

namespace App\Http\Controllers;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use App\Category;
class CategoryController extends Controller
{
    public function __construct(){
        $this->middleware('auth:api-admins')->except('index','show','product');
    }

    public function index()
    {
        return response()->json(Category::all(),200);
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
        $category=new Category;
        $request->validate([
            "category"=>"required|unique:categories",
            "description"=>"required"
        ]);
        $category->category=$request->category;
        $category->description=$request->description;
        $category->save();
        return response()->json([
            'message' => 'category created successfully !'
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
       $category->update($request->all());
        return response([
            'message'=>'Category updated successfully !!' 
        ],Response::HTTP_CREATED);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category->delete();
         return response(null,Response::HTTP_NO_CONTENT);
    }
    public function product($id){
        $product=Category::find($id)->product;
        return response()->json($product); 
    }
}
