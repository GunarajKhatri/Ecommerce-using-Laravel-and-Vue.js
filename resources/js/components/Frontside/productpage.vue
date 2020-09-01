<template>		
<div class="product_image_area" style="margin-top:80px;">
		<div class="container">
			<div class="row s_product_inner">
				<div class="col-lg-6">
					<div class="s_product_img">
						<img class="" :src="`/storage/${products.image}`" alt="" style="width:430px;
      height:580px;margin-left:50px;">

						
					</div>
				</div>
				<div class="col-lg-5 offset-lg-1">
					<div class="s_product_text">
						<h3>{{products.name}}</h3>
						<h2>${{products.price}}</h2>
						<ul class="list">
							<li>
								<a  href="#">
									<span>Category</span> : {{products.category}}</a>
							</li>
							<li>
								<a href="#">
									<span>Stock</span> : {{stockN}}</a>
							</li>
						</ul>
						<p>{{products.description}}</p>
						<div class="product_count">
							<label for="qty">Quantity:</label>
							<input type="text" name="qty" id="sst" maxlength="12" title="Quantity:" class="input-text qty" v-model="quantity">
							<button class="increase items-count" type="button" @click="increase()":disabled="show1">
								<i class="lnr lnr-chevron-up"></i>
							</button>
							<button @click="decrease()"class="reduced items-count" type="button":disabled="show">
								<i class="lnr lnr-chevron-down"></i>
							</button>
						</div>
						<div class="card_area">
							<button class="main_btn"@click="addcart(products)">Add to Cart</button>
							<a class="icon_btn" href="#">
								<i class="lnr lnr lnr-diamond"></i>
							</a>
							<a class="icon_btn" href="#">
								<i class="lnr lnr lnr-heart"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
    export default {
    	data(){
    		return{
    	quantity:1,
    	//stock:this.$store.state.productdetail.data.stock-1,
    	sdetail:{
    	   stock:'',
    	    product:''
    	},
    	stocks:[],
    	stockN:'',
    	show:false,
    	show1:false,

    		}
    	},
    	computed:{
    		products(){
    			return this.$store.state.productdetail.data
    		}
    	},
        mounted() {
        	console.log(this.$store.state.productdetail.data.stock)
            this.$store.dispatch('getfull')
            this.$store.commit('viewcart')
            if(localStorage.getItem('stock')){
            		var Sarray=JSON.parse(localStorage.getItem('stock'));
            		console.log(Sarray)
          var res=Sarray.filter((x)=>{return x.product===this.$store.state.productdetail.data.id;});
          	if(res==''){
          		this.stockN=this.$store.state.productdetail.data.stock-1;
            	}
            	else{
            		this.stockN=res[0].stock-1;
            	}
            }
            else{
            	this.stockN=this.$store.state.productdetail.data.stock-1;
            }
        },
        methods:{
        	addcart(prod){
        		this.sdetail.stock=this.stockN;
        		this.sdetail.product=this.$store.state.productdetail.data.id;
        		this.stocks.push(this.sdetail)
        		this.sdetail={}
        		localStorage.setItem('stock',JSON.stringify(this.stocks))

        		this.$store.dispatch('addcart',[prod,this.quantity]);
        		//this.$store.commit('viewcart')
        	},
        	increase(){
        		this.show=false;
        	var result = document.getElementById('sst'); 
        	 if( !isNaN( this.quantity )) result.value++;
        	 this.quantity = result.value;
        	 this.stockN=this.stockN-1;
        	 if(this.stockN==0){
        	 		this.show1=true;
        	 }
        	 return false;	
        	},
        	decrease(){
        		this.show1=false;
        	var result = document.getElementById('sst');
            if( result.value > 0 ) result.value--;
        	 this.quantity = result.value;
        	 this.stockN=this.stockN+1;
        	 if(this.stockN<0){
        	 	this.stockN=this.stockN+0;
        	 }
        	 if(result.value==0){
        	 	this.show=true;
        	 }
        	 console.log(result.value)
        	 return false;


        }

        }
    }
</script>