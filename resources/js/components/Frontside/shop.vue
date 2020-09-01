<template>
	<div style="margin-top:80px;">
	<section class="cat_product_area section_gap">
		<div class="container-fluid">
			<div class="row flex-row-reverse">
				<div class="col-lg-9">
					<div class="product_top_bar">
						<div class="left_dorp">
							<select class="sorting">
								<option value="1">Default sorting</option>
								<option value="2">Default sorting 01</option>
								<option value="4">Default sorting 02</option>
							</select>
							
						</div>
<!-- <div class="right_page ml-auto">
							<nav class="cat_page" aria-label="Page navigation example">
								<ul class="pagination">
									<li class="page-item">
										<a class="page-link" href="#">
											<i class="fa fa-long-arrow-left" aria-hidden="true"></i>
										</a>
									</li>
									<li class="page-item active">
										<a class="page-link" href="#">1</a>
									</li>
									<li class="page-item">
										<a class="page-link" href="#">2</a>
									</li>
									<li class="page-item">
										<a class="page-link" href="#">3</a>
									</li>
									<li class="page-item blank">
										<a class="page-link" href="#">...</a>
									</li>
									<li class="page-item">
										<a class="page-link" href="#">6</a>
									</li>
									<li class="page-item">
										<a class="page-link" href="#">
											<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
										</a>
									</li>
								</ul>
							</nav>
						</div> -->
					</div>
					<div class="latest_product_inner row" v-if="cid==''">
						<div class="col-lg-3 col-md-3 col-sm-6" v-for="product in products">
							<div class="f_p_item">
								<div class="f_p_img">
									<img class="img-fluid":src="`/storage/${product.image}`" alt=""style="width:200px;height:180px;">
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
					<div class="latest_product_inner row" v-else>
						<div class="col-lg-3 col-md-3 col-sm-6" v-for="prod in catprods">
							<div class="f_p_item">
								<div class="f_p_img">
									<img class="img-fluid fimage" :src="`/storage/${prod.image}`" alt=""style="width:200px;height:180px;">
									<div class="p_icon">
										<a href="#">
											<i class="lnr
											lnr-heart"></i>
										</a>
										<a>
											<i class="lnr lnr-cart" @click="showfull(prod.id)"></i>
										</a>
									</div>
								</div>
								
									<h4 class="pname" @click="showfull(prod.id)">{{prod.name}}</h4>
								
								<h5>${{prod.price}}</h5>	
								 	

							</div>
						</div>	
						
					</div>
				</div>
				<div class="col-lg-3">
					<div class="left_sidebar_area">
						<aside class="left_widgets cat_widgets">
							<div class="l_w_title">
								<h3>Browse Categories</h3>
							</div>
							<div class="widgets_inner">
								<ul class="list" v-for="item in items">
									<li class="nav-items catgor"@click="getprod(item.id)">
									{{item.category}}
										
									</li>
									
								</ul>
							</div>
						</aside>
					</div>
				</div>
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
	</section>	
	
	</div>
</template>
<script>
    export default {
       
       data(){
       	return{
       		cid:''
       	}
       },
          computed:{
          
          show(){
                if(this.$route.path=="/shop"){
                    return true;
                }
            
        },
        items(){
            return this.$store.state.catlists.data
          },
          catprods(){
          	return this.$store.state.categoryprod.data
          },
          products(){
          	return this.$store.state.prodlists.data.data;
          }
    },
    mounted(){
          this.$store.dispatch('getcategory')
          this.$store.commit('viewcart')
          this.$store.dispatch('getproduct');
        },
    methods:{
    	getprod(id){
    		this.cid=id
    		this.$store.dispatch('cateprod',id);
        		/*this.$router.push(`/shop/category/${id}`)*/
        	},
        	showfull(id){
        		this.$store.dispatch('getfull',id).then(response =>{
                        this.$router.push(`/products/${id}`)
        	    
                    });
        		
        }
    }
}
</script>
<style scoped>
.catgor:hover{
	color:blue;
}

</style>