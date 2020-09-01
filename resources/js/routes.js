import Login from './components/Login';
import Register from './components/Register';
import logout from './components/logout';
import dashboard from './components/dashboard';
import category from './components/admin/category';
import adminlogin from './components/admin/adminlogin';
import showcategory from './components/admin/showcategory';
import updatecategory from './components/admin/updatecategory';
import adminhome from './components/admin/adminhome';
import product from './components/admin/product';
import order from './components/admin/order';
import customer from './components/admin/customer';
import customerorder from './components/admin/customerorder';
import orderdetail from './components/admin/orderdetail';
import showproduct from './components/admin/showproduct';
import user from './components/admin/user';
import showadmin from './components/admin/showadmin';
import updateproduct from './components/admin/updateproduct';
import shop from './components/frontside/shop';
import cateprod from './components/frontside/cateprod';
import productpage from './components/frontside/productpage';
import cart from './components/frontside/cart';
import checkout from './components/frontside/checkout';
import ordereditem from './components/frontside/ordereditem';
 
export const routes=[
{
	'path':'/login',component:Login,meta:{
		requireVisitor:true
	}
},
{
	'path':'/register',component:Register,meta:{
		requireVisitor:true
	}
},
{
	'path':'/logout',component:logout
},

{
	'path':'/shop',component:shop
}
,
{
	'path':'/shop/category/:id',component:cateprod
}
,
{
	'path':'/products/:id',component:productpage
}
,
{
	'path':'/cart',component:cart
}
,
{
	'path':'/orders',component:ordereditem,meta:{
		requireAuth:true
	}
}
,
{
	'path':'/admin/login',component:adminlogin,meta:{
		requireVisitor:true
	}
}
,
{
	'path':'/checkout',component:checkout,meta:{
		requireAuth:true
	}
},
	{
	'path':'/admin/home',component:adminhome,meta:{
		requireAuth:true
	},
	children:[
        {
	'path':'/admin/order',component:order
		},
		{
	'path':'/admin/category',component:showcategory
		},
		{
	'path':'/admin/users',component:showadmin
  		},
   {
	'path':'/admin/category/create',component:category
},
{
	'path':'/admin/category/edit/:id',component:updatecategory
},
{
	'path':'/admin/product',component:showproduct
},
{
	'path':'/admin/product/create',component:product
},
{
	'path':'/admin/product/edit/:id',component:updateproduct
},
{
	'path':'/admin/order/detail/:id',component:orderdetail
},
{
	'path':'/admin/user/create',component:user
	},
{
	'path':'/admin/customers',component:customer
	},
{
	'path':'/admin/customer/:id/order',component:customerorder
	}

       ],	
}

];