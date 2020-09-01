<template>
	<div v-if="show">
		<section class="home_banner_area">
		<div class="overlay"></div>
		<div class="banner_inner d-flex align-items-center">
			<div class="">
				<div class="banner_content row">
					<div class="offset-lg-2 col-lg-8">
						<h3>5% off on
							<br />Every sale</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
						<a class="white_bg_btn" href="#">View Collection</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="feature_product_area section_gap">
		<div class="main_box">
			<div class="container-fluid">
				<div class="row">
					<div class="main_title">
						<h2>Featured Products</h2>
						<p>Who are in extremely love with eco friendly system.</p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-3 col-lg-3" v-for="product in products.data":key="product.id">
						<div class="f_p_item">
							<div class="f_p_img">
								<img class="img-fluid fimage" :src="`/storage/${product.image}`" alt="">
								<div class="p_icon">
									<a href="#">
										<i class="lnr lnr-heart"></i>
									</a>
										<a>
										<i class="lnr lnr-cart"@click="showfull(product.id)"></i>
									</a>
									
								</div>
							</div>
							
								<h4 class="pname" @click="showfull(product.id)">{{product.name}}</h4>
							
							<h5>${{product.price}}</h5>
						</div>
					</div>
					
					
				</div>
				<div class="row" v-if="products.total>0">
				<pagination :data="products" @pagination-change-page="getResult">
					<span slot="prev-nav"class="page-item"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
					<span slot="next-nav"class="page-item"> <i class="fa fa-chevron-right" aria-hidden="true"></i></span>
				</pagination>	
				</div>

<!-- <div class="row">
					<nav class="cat_page mx-auto" aria-label="Page navigation example">
						<ul class="pagination">
							<li class="page-item">
								<a class="page-link" href="#">
									<i class="fa fa-chevron-left" aria-hidden="true"></i>
								</a>
							</li>
							<li class="page-item active">
								<a class="page-link" href="#">01</a>
							</li>
							<li class="page-item">
								<a class="page-link" href="#">02</a>
							</li>
							<li class="page-item">
								<a class="page-link" href="#">03</a>
							</li>
							<li class="page-item blank">
								<a class="page-link" href="#">...</a>
							</li>
							<li class="page-item">
								<a class="page-link" href="#">09</a>
							</li>
							<li class="page-item">
								<a class="page-link" href="#">
									<i class="fa fa-chevron-right" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</nav>
				</div> -->
			</div>
		</div>
	</section>
	</div>
</template>
<script>
    export default {
    	data(){
    		return {
    			products:{}
    		}
    	},
    	/*computed:{
          products(){
            //return this.$store.state.prodlists.data
            return this.$store.state.prodlists
          },*/
          computed:{
          show(){
                if(this.$route.path=="/"){
                    return true;
                }
            }
            },
        
        mounted() {
            this.$store.dispatch('getproduct');
            //this.getproduct();
            //this.$store.commit('viewcart')
            console.log(this.products)
            this.getResult()
        },
        methods:{
        	showfull(id){
        		this.$store.dispatch('getfull',id).then(response =>{
                        this.$router.push(`/products/${id}`)
        	    
                    });
        		
        },
        getResult(page = 1){
        	axios.get('/api/products?page=' + page).then((response)=>{
    	this.products=response.data
    	console.log(this.products)
    	});
        }/*,
        getproduct(){
        axios.get('/api/products').then((response)=>{
             this.products=response.data
             console.log(this.products)
			})	
    }*/
    }
    }
</script>