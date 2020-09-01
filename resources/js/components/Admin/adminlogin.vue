<template>	
  <div>
<div class="login-box">
  <div class="login-logo">
    <a href="../../index2.html"><b>Gunaraj</b>Shop</a>
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
    <p class="login-box-msg">Sign in to start your session</p>

    
      <div class="form-group has-feedback">
        <input type="email" class="form-control" placeholder="Email"v-model="email">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" class="form-control" placeholder="Password"v-model="password">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="row">
       
        <!-- /.col -->
        <div class="col-xs-4">
          <button type="submit" class="btn btn-primary btn-block btn-flat"@click="submit()">Sign In</button>
        </div>
        <!-- /.col -->
      </div>
  

    <div class="social-auth-links text-center">
      <p>- OR -</p>
      <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign in using
        Facebook</a>
      <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign in using
        Google+</a>
    </div>
    <!-- /.social-auth-links -->

    <a href="#">I forgot my password</a><br>
    <a href="register.html" class="text-center">Register a new membership</a>

  </div>
  <!-- /.login-box-body -->
</div>
</div>

</template>
<script>
    export default {
        data(){
            return{
                email:'',
                password:''
            }
        },
        methods:{
            submit(){
                this.$store.dispatch("authenticateadmin",
                        {
                            email:this.email,
                            password:this.password
                        }

                    ).then(response =>{
                            this.$router.push('/admin/home');
                    this.$router.go();
                    });
                    /*this.$router.push('/admin/home');
                    this.$router.go();*/


                    
                
            }
        },
        computed:{
          /*show(){
            if(this.$route.path=="/admin1/login"){
                    return true;
                }
          }*/
        }
    }
</script>
