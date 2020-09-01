import {routes} from './routes';
export default{
	state:{
		token:localStorage.getItem('access_token') || null,
		admintoken:localStorage.getItem('admin_access_token') || null,
		error:{},
		aderror:{},
		successmsg:'',
		loggedadmin:localStorage.getItem('loggedadmin') || null,
		loggeduser:JSON.parse(localStorage.getItem('loggeduser')) || null,
		updatemsg:'',
		categoryerror:{
		},
		checkouterror:{},
		adminerror:{},
		catlists:[],
		user:[],

		//prodlists:{},
		prodlists:[],
		categoryprod:[],
		allorder:[],
		customers:[],
		ordereditem:[],
		orderdetail:{},
		updatecategory:{},
		updateproduct:{},
		productmsg:'',
		producterror:{},
		productupderror:{},
		productdetail:{},
		carts:[],
		cartadd:{
			id:'',
			name:'',
			description:'',
			amount:'',
			subtotal:'',
			image:'',
			price:''

		},
		badge:0,
		quantity:1,
		totalprice:'0'
	},
	getters:{
		loggedin(state){
			return state.token!=null;
		},
		adminloggedin(state){
			return state.admintoken!=null;
		}
	},
	actions:{
		// in my case my base url is localhost/api/public so as per your
		//base url you can edit in axios part:)
		logout(context){

			axios.defaults.headers.common['Authorization']='Bearer ' + context.state.token
			if(context.getters.loggedin){
				return new Promise((resolve,reject)=>{
			axios.post('/api/logout').then((response)=>{
	   context.commit('destroyToken')
	   resolve(response)
	   
	  })
	  .catch((error)=>
	  	{
	  		context.commit('destroyToken')
	  		reject(error)
	  	})
	  })
		}
		},
		adminlogout(context){

			axios.defaults.headers.common['Authorization']='Bearer ' + context.state.admintoken
			if(context.getters.adminloggedin){
				return new Promise((resolve,reject)=>{
			axios.post('/api/admin/logout').then((response)=>{
	   context.commit('destroyadminToken')
	   resolve(response)
	   
	  })
	  .catch((error)=>
	  	{
	  		context.commit('destroyadminToken')
	  		reject(error)
	  	})
	  })
		}
		},

		authenticateuser(context,payload){
			return new Promise((resolve,reject)=>{
			axios.post('/api/login',{email:payload.email,password:payload.password}).then((response)=>{
	   context.commit('setToken',response.data)
	   resolve(response)
	  
	  })
	  .catch((error)=>
	  	{
	  		context.commit('errorr',error)
	  		reject(error)
	  	})
	  })
		},
		authenticateadmin(context,payload){
			return new Promise((resolve,reject)=>{
			axios.post('/api/admin/login',{email:payload.email,password:payload.password}).then((response)=>{
	   context.commit('setadminToken',response.data)
	   resolve(response)
	  
	  })
	  .catch((error)=>
	  	{
	  		context.commit('adminerror',error.response.data.errors);
	  		reject(error)
	  	})
	  })
		},

		registeruser(context,payload){
		return new Promise((resolve,reject)=>{
			axios.post('/api/register',{username:payload.username,email:payload.email,password:payload.password}).then((response)=>{
				context.commit('success')
	   resolve(response)
	  
	  })
	  .catch((error)=>
	  	{
	  		context.commit('errorr',error.response.data.errors)
	  		reject(error)
	  	})
	  })	
		},
		registeradmin(context,payload){
		return new Promise((resolve,reject)=>{
			axios.post('/api/admin/register',{username:payload.username,email:payload.email,password:payload.password}).then((response)=>{
				context.commit('adsuccess')
	   resolve(response)
	  
	  })
	  .catch((error)=>
	  	{
	  		context.commit('aderrorr',error.response.data.errors)
	  		reject(error)
	  	})
	  })	
		},
		Addcategory(context,payload){
			axios.defaults.headers.common['Authorization']='Bearer ' + context.state.admintoken
		return new Promise((resolve,reject)=>{
			axios.post('/api/categories',{category:payload.category,description:payload.description}).then((response)=>{
	   resolve(response)
	   context.commit('Addedcategory',response.data.message)
	  
	  })
	  .catch((error)=>
	  	{
	  		context.commit('errorcatg',error.response.data.errors)
	  		reject(error)
	  	})
	  })	
		},
		getcategory(context){
			axios.get('/api/categories').then((response)=>{
             context.commit('gettingcategory',response)
			})
		},
		showuser(context){
			axios.defaults.headers.common['Authorization']='Bearer ' + context.state.admintoken
			axios.get('/api/users').then((response)=>{
             context.commit('gettinguser',response)
			})
		},
		del(context,payload){
			axios.defaults.headers.common['Authorization']='Bearer ' + context.state.admintoken
			if(confirm('Are you sure you want to delete?')){
  	axios.delete(`/api/categories/${payload[1]}`).then((response)=>
	  
	  context.commit('deletingCategory',payload[0]))
	  
	 
	}
},
    getCatid(context,payload){
			context.commit('getCatupduser',payload)
	},
	updateCategory(context,payload){ 
		axios.defaults.headers.common['Authorization']='Bearer ' + context.state.admintoken
		return new Promise((resolve,reject)=>{
		axios.patch(`/api/categories/${payload.id}`,{category:payload.category,description:payload.description}).then((response)=>{
	  context.commit('respon',response.data.message)
	  	 resolve(response)
	})
	 .catch((error)=>{context.commit('errorcatg',error.response.data.errors)
	 	reject(error)  
	})
	})
	
   },
   addproduct(context,payload){
   	axios.defaults.headers.common['Authorization']='Bearer ' + context.state.admintoken
   	return new Promise((resolve,reject)=>{
			axios.post('/api/products',payload).then((response)=>{
	   resolve(response)
	   context.commit('Addedproduct',response.data.message)
	  
	  })
	  .catch((error)=>
	  	{
	  		context.commit('errorprod',error.response.data.errors)
	  		reject(error)
	  	})
	  })
   },
   getproduct(context){
   axios.get('/api/products').then((response)=>{
             context.commit('gettingproduct',response)
			})	
   },
   delprod(context,payload){
   	axios.defaults.headers.common['Authorization']='Bearer ' + context.state.admintoken
   	return new Promise((resolve,reject)=>{
			if(confirm('Are you sure you want to delete?')){
  	axios.delete(`/api/products/${payload[1]}`).then((response)=>{
	  resolve(response)
	  //context.commit('deletingProduct',payload[0]))
	  
	 });
  }
});
},
	getProdid(context,payload){
			context.commit('getProdupduser',payload)
	},
	updateproduct(context,payload){
		axios.defaults.headers.common['Authorization']='Bearer ' + context.state.admintoken
		return new Promise((resolve,reject)=>{
			axios.post(`/api/products/${payload[1]}`,payload[0]).then((response)=>{
	   resolve(response)
	   context.commit('Updatedproduct')
	  
	  })
	  .catch((error)=>
	  	{
	  		context.commit('errorupdprod',error.response.data.errors)
	  		reject(error)
	  	})
	  })
	},
	cateprod(context,payload){
	axios.get(`/api/category/${payload}/products`).then((response)=>{
             context.commit('gettingcategoryprod',response)
			})	
	},
	getfull(context,payload){
		return new Promise((resolve,reject)=>{
	axios.get(`/api/products/${payload}`).then((response)=>{
             context.commit('gettingfullproduct',response)
             resolve(response)
			})
			})	
	},
	addcart(context,payload){
		context.commit('storecart',payload)
	},/*,
	paginate(context,payload){
    axios.get('/api/products/page?='+1).then((response)=>
    	context.commit('gettingproductP',response)
    	);
	}
*/
order(context,payload){
	axios.defaults.headers.common['Authorization']='Bearer ' + context.state.token;
	var items=JSON.parse(localStorage.getItem('carts'));
	items.forEach((item)=>{
		return new Promise((resolve,reject)=>{
			axios.post('/api/order',
				{
					firstname:payload.firstname,
        				lastname:payload.lastname,
        				email:payload.email,
        				number:payload.number,
        				address:payload.address,
        				country:payload.country,
        				product_id:item.id,
        				quantity:item.amount
				})
			.then((response)=>{
				localStorage.removeItem('carts');
				context.commit('removecart2');
	   resolve(response)
	  
	  })
	  .catch((error)=>
	  	{
	  		console.log(error)
	  		context.commit('checkouterror',error.response.data.errors)
	  		reject(error) 
	  	});
	  });
	});
		
   },
   getorder(context,payload){
   	axios.defaults.headers.common['Authorization']='Bearer ' + context.state.admintoken
   	axios.get('/api/order').then((response)=>{
   		context.commit('getallorder',response)
   	});
   },
   orderdetail(context,payload){
   	axios.defaults.headers.common['Authorization']='Bearer ' + context.state.admintoken
   	return new Promise((resolve,reject)=>{
   	axios.get(`/api/order/${payload}`).then((response)=>{
   			context.commit('showordetail',response);
   			resolve(response);
   	});
   });
},
clearorder(context,payload){
	axios.defaults.headers.common['Authorization']='Bearer ' + context.state.admintoken
return new Promise((resolve,reject)=>{
axios.patch(`/api/order/${payload}`).then((response)=>{
   			resolve(response);
   	});
});	
},
deleteuser(context,payload){
	axios.defaults.headers.common['Authorization']='Bearer ' + context.state.admintoken
	if(confirm('Are you sure you want to delete user?')){
return new Promise((resolve,reject)=>{
   	axios.delete(`/api/users/${payload[1]}`).then((response)=>{
   			resolve(response); 
   			context.commit('deluser',payload[0]);
   	});
   });
}
},
ordereditem(context,payload){
	axios.get(`/api/users/${payload}/orders`).then((response)=>{
		context.commit('getordereditem',response);
	});
},
getcustomer(context,payload){
	axios.get('/api/customer').then((response)=>{
		context.commit('fetchcustomer',response);
	});
}

},
	
	mutations:{
		setToken(state,payload){
			localStorage.setItem('access_token',payload.access_token)
			localStorage.setItem('loggeduser',JSON.stringify(payload))
			state.token=payload.access_token,
			state.loggeduser=payload

		},
		setadminToken(state,payload){
			localStorage.setItem('admin_access_token',payload.access_token)
			localStorage.setItem('loggedadmin',payload.user)
			state.admintoken=payload.access_token,
			state.loggedadmin=payload.user
			state.adminerror=''
		},
		adminerror(state,payload){
			state.adminerror=payload
		},
		errorr(state,payload){
			console.log(payload)
			if(payload){
			state.error=payload
			}
		},
		aderrorr(state,payload){
			
			if(payload){
			state.aderror=payload
			}
		},
		errorcatg(state,payload){
			if(payload){
			state.successmsg=''
			state.categoryerror=payload
		}
		},
		success(state,payload){
			state.error=''
		},
		adsuccess(state,payload){
			state.aderror=''
		},
		errorprod(state,payload){
			if(payload){
			state.productmsg=''
			state.producterror=payload
		}
		},
		errorupdprod(state,payload){
			if(payload){
			state.productupderror=payload
		}
		},

		destroyToken(state){
			localStorage.removeItem('access_token')
			localStorage.removeItem('loggeduser')
			state.token=null
			state.loggeduser=null
		},
		destroyadminToken(state){
			localStorage.removeItem('admin_access_token')
			localStorage.removeItem('loggedadmin')
			state.admintoken=null
			state.loggedadmin=null
		},

		Addedcategory(state,payload){
			state.successmsg=payload
			console.log(state.successmsg)
		},
		Updatedproduct(state,payload){
			state.productupderror=''
		},
		gettingcategory(state,payload){
			state.catlists=payload
		},
		gettinguser(state,payload){
			state.user=payload
		},
		gettingcategoryprod(state,payload){
			state.categoryprod=payload
		},
		gettingproduct(state,payload){
			state.prodlists=payload
		}
		/*,
		gettingproductP(state,payload){
			state.prodlists=payload.data
		}*/,
		deletingCategory(state,payload){
			state.catlists.data.splice(payload,1)
		},
		deluser(state,payload){
			state.user.data.splice(payload,1)
		},/*,
		deletingProduct(state,payload){
			//console.log(state.prodlists.data.data)
			//state.prodlists.data.data.splice(payload,1)
		},*/
		getCatupduser(state,payload){
			state.updatecategory=state.catlists.data[payload]
		},
		getProdupduser(state,payload){
				
			state.updateproduct=payload[1][payload[0]];

		},
		respon(state,payload){
			state.updatemsg=payload
			state.categoryerrors=''
		},
		Addedproduct(state,payload){
			state.productmsg=payload
			state.producterror=' '
		},
		gettingfullproduct(state,payload){
			console.log(payload)
			state.productdetail=payload
		},
		showordetail(state,payload){
		state.orderdetail=payload

		},
		getordereditem(state,payload){
			state.ordereditem=payload
		},
		fetchcustomer(state,payload){
				state.customers=payload
		},

	removecart2(state,payload){
		state.carts=[]
		state.badge=0
		state.totalprice=''
		state.checkouterror=''
			
	},
	checkouterror(state,payload){
     state.checkouterror=payload
	},
	viewcart(state,payload){
		if(localStorage.getItem('carts')){
		state.carts=JSON.parse(localStorage.getItem('carts'));
		state.badge=state.carts.length;
		state.totalprice=state.carts.reduce((total,item)=>{
 			return total+item.amount*item.price;
		},0)	
		}

	},
	storecart(state,payload){
		//console.log(state.quantity)
		//console.log(state.carts)
		var product=state.carts.find(item=>item.id===payload[0].id)
		if(product){
			var b=parseInt(product.amount)
			b+=parseInt(payload[1]);
			var Myarray=JSON.parse(localStorage.getItem('carts'));
			console.log(Myarray) 
			var res=Myarray.filter((x)=>{return x.id===payload[0].id;});
			res[0].amount=b
			res[0].subtotal=b*parseInt(res[0].price)
			console.log(res)
			console.log(Myarray)
			localStorage.setItem('carts',JSON.stringify(Myarray));
			return;
		}	
	state.cartadd.id=payload[0] .id
	state.cartadd.name=payload[0].name
	state.cartadd.description=payload[0].description
	state.cartadd.image=payload[0].image
	state.cartadd.price=payload[0].price
	state.cartadd.amount=payload[1]
	state.cartadd.subtotal=parseInt(payload[0].price)*parseInt(payload[1])
	state.carts.push(state.cartadd)
	state.cardadd={}
	console.log(state.carts)
	let parsed=JSON.stringify(state.carts)	
	localStorage.setItem('carts',parsed);
	 if(localStorage.getItem('carts')){
		state.carts=JSON.parse(localStorage.getItem('carts'));
		state.badge=state.carts.length;
		state.totalprice=state.carts.reduce((total,item)=>{
 			return total+item.amount*item.price;
		},0);
}
		}, 

	


	
	removecart(state,payload){
		//console.log(payload)
		/*localStorage.removeItem('carts',state.ca rts[payload])*/
		var pid=state.carts[payload].id;
		var qty=state.carts[payload].amount;
		var Myarray=JSON.parse(localStorage.getItem('stock')); 
		var res=Myarray.filter((x)=>{return x.product===pid;});
		//console.log(res[0].stock)
		res[0].stock=res[0].stock+parseInt(qty)
		//console.log(res[0].stock)
		localStorage.setItem('stock',JSON.stringify(Myarray));
		state.carts.splice(payload,1);
		let parsed=JSON.stringify(state.carts)
		localStorage.setItem('carts',parsed);
		state.badge=state.carts.length
		state.totalprice=''
		//var pid=state.carts[payload].id;
		/*var qty=state.carts[payload].amount;
		var Myarray=JSON.parse(localStorage.getItem('stock')); 
		var res=Myarray.filter((x)=>{return x.product===pid;});
		//console.log(res[0].stock)
		res[0].stock=res[0].stock+parseInt(qty)+1
		//console.log(res[0].stock)
		localStorage.setItem('stock',JSON.stringify(Myarray));*/

	},
	getallorder(state,payload){
		state.allorder=payload
	}


	}
}



