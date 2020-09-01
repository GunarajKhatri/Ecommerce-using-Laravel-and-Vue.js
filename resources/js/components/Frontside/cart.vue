<template>
	<div style="margin-top:40px;">
		<section class="cart_area">
		<div class="container">
			<div class="cart_inner">
				<div class="table-responsive"v-if="this.$store.state.carts!=''">
					<table class="table">
						<thead>
							<tr>
								<th scope="col">Product</th>
								<th scope="col">Price</th>
								<th scope="col">Quantity</th>
								<th scope="col">Total</th>
								<th scope="col">Remove</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="cart,key in carts">
								<td>
									<div class="media">
										<div class="d-flex">
								<img :src="`/storage/${cart.image}`" alt="" style="width:60px;width:60px;">
										</div>
										<div class="media-body">
											<p>{{cart.description}}</p>
										</div>
									</div>
								</td>
								<td>
									<h5>${{cart.price}}</h5>
								</td>
								<td>
									<div class="product_count">
										<input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" class="input-text qty" v-model="cart.amount">
										<button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
										 class="increase items-count" type="button">
											<i class="lnr lnr-chevron-up"></i>
										</button>
										<button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
										 class="reduced items-count" type="button">
											<i class="lnr lnr-chevron-down"></i>
										</button>
									</div>
								</td>
								<td>
									<h5>${{cart.subtotal}}</h5>
								</td>
								<td><i class="lnr lnr-cross" 
								@click="removecart(key)"></i></td>
							</tr>
							

							<tr class="bottom_button">
								<td>
									<a class="gray_btn" href="#">Update Cart</a>
								</td>
								<td>

								</td>
								<td>

								</td>
								
							</tr>
							<tr>
								<td>

								</td>
								<td>

								</td>
								<td>
									<h5>Total amount</h5>
								</td>
								<td>
									<h5 v-if="this.$store.state.totalprice">${{this.$store.state.totalprice}}</h5>
								</td>
							</tr>

							<tr class="out_button_area">
								<td>

								</td>
								<td>

								</td>
								<td>

								</td>
								<td>
									<div class="checkout_btn_inner">
										<a class="gray_btn" href="#">Continue Shopping</a><br>	

										<button class="main_btn"@click="checkout()">Proceed to checkout</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div v-else style="margin-top:50px;margin-left:40%;" class="row">
					<h4>No carts are added yet</h4>
					
				</div>

			</div>
		</div>
	</section>
	</div>
</template>
<script>
    export default {
    	
         mounted() {
            this.$store.commit('viewcart')
            
        },
        computed:{
        	carts(){
        		console.log(this.$store.state.carts)
        		return this.$store.state.carts
        	}
        },
        methods:{
        	removecart(nkey){
        		
        		this.$store.commit('removecart',nkey);
        		
        	},
        	checkout(){
        		this.$router.push('/checkout');
        	}
        }
    }
</script>