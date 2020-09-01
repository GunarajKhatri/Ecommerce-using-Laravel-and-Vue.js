<template>
	<div>
		<header class="header_area">
		<div class="top_menu row m0">
			<div class="container-fluid">
				<div class="float-left">
					<p>Call Us: 012 44 5698 7456 896</p>
				</div>
				<div class="float-right">
					<ul class="right_side">
						
							<li class="nav-item"v-if="!loggedin">
                               <router-link to="/login" class="nav-link">Login</router-link>  
                            
						</li>
						
							<li class="nav-item"v-if="!loggedin">
                                    <router-link to="/register" class="nav-link">Register</router-link>
                                </li>
                                <li class="nav-item"v-if="loggedin">
                                    <h6>Hi! {{this.$store.state.loggeduser.user.name}}</h6>
                                </li>
                                <li class="nav-item"v-if="loggedin">
                                    <router-link to="/orders" class="nav-link">Orders</router-link>
                                </li>
                                <li class="nav-item"v-if="loggedin">
                                    <router-link to="/logout" class="nav-link">Logout</router-link>
                                </li>
						
						<li>
							<a href="contact.html">
								Contact Us
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="main_menu">
			<nav class="navbar navbar-expand-lg navbar-light">
				<div class="container-fluid">
					<!-- Brand and toggle get grouped for better mobile display -->
					<a class="navbar-brand logo_h" href="index.html">
						<h1>Gunaraj Shop</h1>
					</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
					 aria-expanded="false" aria-label="Toggle navigation">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
						<div class="row w-100">
							<div class="col-lg-7 pr-0">
								<ul class="nav navbar-nav center_nav pull-right">
									<li class="nav-item active">
										<a class="nav-link" href="/">Home</a>
									</li>
									<li class="nav-item">
										<router-link to="/shop" class="nav-link">Shop</router-link>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="contact.html">Contact</a>
									</li>
								</ul>
							</div>

							<div class="col-lg-5">
								<ul class="nav navbar-nav navbar-right right_nav pull-right">
									<hr>
									

									

									

									
									<li class="nav-item">
										
										<router-link to="/cart" class="nav-link"><i class="lnr lnr lnr-cart"style="font-size:30px;"></i><span class="badge badge-dark" style="font-size:13px;">{{this.$store.state.badge}}</span></router-link>
									
										
									</li>

									<hr>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</header>
	</div>
</template>
<script>
    export default {
    mounted(){
    this.$store.commit('viewcart')
    },
    computed:{
    	loggedin(){
            return this.$store.getters.loggedin;
    }
}
}
</script>