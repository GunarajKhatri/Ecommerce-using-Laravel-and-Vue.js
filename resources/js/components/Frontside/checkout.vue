<template>
	<div class="billing_details" style="margin-top:150px;">
				<div class="row">
					<div class="col-lg-8">
						<h3>Billing Details</h3>
						<form class="row contact_form" action="#" method="post" novalidate="novalidate">
							<div class="col-md-6 form-group p_star">
								<input type="text" class="form-control" id="first" name="name"placeholder="First name"v-model="firstname">
								<span v-if="this.$store.state.checkouterror.firstname" class="text-danger">{{this.$store.state.checkouterror.firstname[0]}}</span>
								
							</div>
							<div class="col-md-6 form-group p_star">
								<input type="text" class="form-control" id="last" name="name"placeholder="Last name"v-model="lastname">
								<span v-if="this.$store.state.checkouterror.lastname" class="text-danger">{{this.$store.state.checkouterror.lastname[0]}}</span>
								
							</div>
							
							<div class="col-md-6 form-group p_star">
								<input type="text" class="form-control" id="number" name="number"placeholder="Phone number"v-model="number">
								<span v-if="this.$store.state.checkouterror.number" class="text-danger">{{this.$store.state.checkouterror.number[0]}}</span>
								
							</div>
							<div class="col-md-6 form-group p_star">
								<input type="text" class="form-control" id="email" name="compemailany"placeholder="Email Address"v-model="email">
								<span v-if="this.$store.state.checkouterror.email" class="text-danger">{{this.$store.state.checkouterror.email[0]}}</span>
								
							</div>
							<div class="col-md-12 form-group p_star">
								<select class="country_select"@change="onChange($event)">
									<option value="Nepal">Nepal</option>
									<option value="Russia">Russia</option>
									<option value="India">India</option>
									<option value="USA">USA</option>
									<option value="China">China</option>
									<option value="Japan">Japan</option>
								</select>
								<span v-if="this.$store.state.checkouterror.country" class="text-danger">{{this.$store.state.checkouterror.country[0]}}</span>
							</div>
							<div class="col-md-12 form-group p_star">
								<input type="text" class="form-control" id="add1" name="add1"placeholder="Address line"v-model="address">
								<span v-if="this.$store.state.checkouterror.address" class="text-danger">{{this.$store.state.checkouterror.address[0]}}</span>
							</div>
							
					
							

						</form>
					</div>
					<div c  lass="col-lg-4">
						<div class="order_box">
							<h2>Your Order</h2>
							<ul class="list">
								<li>
									<a href="#">Product
										<span>Price</span>
									</a>
								</li>
								<li v-for="product in products">
									<a href="#">{{product.name}}
										<span class="middle">{{product.amount}}x${{product.price}}</span>
										<span class="last">${{product.subtotal}}</span>
									</a>
								</li>
								
								
							</ul>
							<ul class="list list_2">
								<li>
									<a href="#">Subtotal
										<span>${{this.$store.state.totalprice}}</span>
									</a>
								</li>
								
								
							</ul>
							<div class="payment_item">
								<div class="radion_btn">
									<input type="radio" id="f-option5" name="selector">
									<label for="f-option5">Check payments</label>
									<div class="check"></div>
								</div>
								<p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
							</div>
							<div class="payment_item active">
								<div class="radion_btn">
									<input type="radio" id="f-option6" name="selector">
									<label for="f-option6">Paypal </label>
									<img src="frontend/img/product/single-product/card.jpg" alt="">
									<div class="check"></div>
								</div>
								<p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
							</div>
							<div class="creat_account">
								<input type="checkbox" id="f-option4" name="selector">
								<label for="f-option4">I’ve read and accept the </label>
								<a href="#">terms & conditions*</a>
							</div>
							<button class="main_btn"@click="order()">Proceed to order</button>
						</div>
					</div>
				</div>
			</div>
</template>
<script>
    export default {
    	data(){
        return{
        	firstname:'',
        	lastname:'',
        	email:'',
        	number:'',
        	address:'',
        	country:''
        }
    	},
    	computed:{
    		products(){
    			return JSON.parse(localStorage.getItem('carts'))
    		}
    	},
        mounted() {
           
        },
        methods:{
        	order(){
        		this.$store.dispatch('order',{
        				firstname:this.firstname,
        				lastname:this.lastname,
        				email:this.email,
        				number:this.number,
        				address:this.address,
        				country:this.country
        		});
        	},
        	
        	onChange:function(event){
        		this.country=event.target.value;
        		
        	}
        }
    }
</script>
