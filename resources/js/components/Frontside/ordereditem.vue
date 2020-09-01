<template>
	<div style="margin-top:40px;"v-if="items!=''">
		<section class="order_details p_120">
		<div class="container">
			<h3 class="title_confirmation" style="margin-left:40%;">All your order details!</h3>

<div class="order_details_table">
				<h2>Order Details</h2>
				<div class="table-responsive">
					<table class="table">
						<thead>
							<tr>
								<th scope="col">Product</th>
								<th scope="col">Quantity</th>
								<th scope="col">Total</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in items">
								<td>
									<p>{{item.product.name}}</p>
								</td>
								<td>
									<h5>x {{item.quantity}}</h5>
								</td>
								<td>
									<p>${{item.product.price}}</p>
								</td>
							</tr>
							
							
							
							<tr>
								<td>
									<h4>Total</h4>
								</td>
								<td>
									<h5></h5>
								</td>
								<td>
									<p>${{totalprice}}</p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		
	</section>
</div>
<div v-else>
<h2>No orders are added !!</h2>	
</div>
</template>

<script>
    export default {
    	data(){
    		return{
    			id:'',
    			user:'',
    			totalp:0,
    			prod:[]
    		}
    	},
       mounted(){
       	this.user=JSON.parse(localStorage.getItem('loggeduser'));
       	this.$store.dispatch('ordereditem',this.user.user.id);

       	
       },
       computed:{
       	items(){
       		return this.$store.state.ordereditem.data;
       	},
       	totalprice(){
       		
       			this.prod=this.$store.state.ordereditem.data;
	       		if(this.prod!=null && this.prod.length>0){

       		for (var i = 0; i < (this.prod).length; i++) {
       			var q=this.prod[i].quantity
       			var p=this.prod[i].product.price
       			var total=parseInt(q)*parseInt(p);
       			this.totalp+=total;
       		}
       	}
       		return this.totalp;
       	}
       }
    }
</script>
