<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\User;
use App\Admin;
use Auth;
use Illuminate\Support\Facades\Hash;
class AuthController extends Controller
{
    public function login(Request $request){
    	$validator=Validator::make($request->all(),[
    		'email'=>'required|string|max:265',
    		'password'=>'required|string|min:6'
    	]);
    	if($validator->fails()){
    		return response(['errors'=>$validator->errors()],422);
    	}
    	$user=User::where('email',$request->email)->first();
    	if($user){    
    		if(Hash::check($request->password,$user->password)){
    				$tokenResult=$user->createToken('Personal Access Token Rosan');
                    $token=$tokenResult->token;
                    $token->save();
                        return response()->json([
                            'access_token'=>$tokenResult->accessToken,
                            'token_type'=>'Bearer',
                            'user'=>$user
                          
                    ]);
                     
    				
                    }
                    else{
                $response=["message"=>"Password does not match !"];
                return response($response,422);
            }
    		}
    		
    	else{
    		$response=["message"=>'User does not exist'];
    		return response($response,422);
    	}
    }
    public function logout(){
        auth()->user()->tokens->each(function($token,$key){
            $token->delete();
        });
        return response()->json(
            "Logged out successfully!"
        );
    }
    public function register(Request $request){
        $request->validate([
            'username'=>'required|string',
            'email'=>'required|string|max:265',
            'password'=>'required|string|min:6'
        ]);
        return User::create([
            'name'=>$request->username,
            'email'=>$request->email,
            'password'=>Hash::make($request->password)
        ]);
    }

    public function adminlogin(Request $request){
        $validator=Validator::make($request->all(),[
            'email'=>'required|string|max:265',
            'password'=>'required|string|min:6'
        ]);
        if($validator->fails()){
            return response(['errors'=>$validator->errors()],422);
        }
        $user=Admin::where('email',$request->email)->first();
        if($user){    
            if(Hash::check($request->password,$user->password)){
                    $tokenResult=$user->createToken('Personal Access Token admin');
                    $token=$tokenResult->token;
                    $token->save();
                        return response()->json([
                            'access_token'=>$tokenResult->accessToken,
                            'token_type'=>'Bearer',
                            'user'=>$user->name
                          
                    ]);
                     
                    
                    }
                    else{
                $response=["message"=>"Password does not match !"];
                return response($response,422);
            }
            }
            
        else{
            $response=["message"=>'User does not exist'];
            return response($response,422);
        }
    }

    public function adminregister(Request $request){
        $request->validate([
            'username'=>'required|string',
            'email'=>'required|string|max:265',
            'password'=>'required|string|min:6'
        ]);
        return Admin::create([
            'name'=>$request->username,
            'email'=>$request->email,
            'password'=>Hash::make($request->password)
        ]);
    }

    public function adminlogout(){
        Auth::guard('api-admins')->user()->tokens->each(function($token,$key){
            $token->delete();
        });
        return response()->json(
            "Logged out successfully!"
        );
    }
    public function showalluser(){
        return response()->json(Admin::all(), 200);
    }
    public function deleteuser($id){
        $user=Admin::find($id);
        $user->delete();
    }
    public function showCustom(){
        return response()->json(User::with(['orders'])->get(), 200);
    }
    
}
