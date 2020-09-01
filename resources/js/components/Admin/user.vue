<template>	
	<div>

  <div class="register-box-body">
    <p class="login-box-msg">Register a new membership</p>

    
      <div class="form-group has-feedback">
        <input type="text" class="form-control" placeholder="Full name" v-model="username">
        <span class="glyphicon glyphicon-user form-control-feedback"></span>
        <span v-if="this.$store.state.aderror.username"class="text-danger">{{this.$store.state.aderror.username[0]}}</span>
      </div>
      <div class="form-group has-feedback">
        <input type="email" class="form-control" placeholder="Email"v-model="email">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        <span v-if="this.$store.state.aderror.email"class="text-danger">{{this.$store.state.aderror.email[0]}}</span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" class="form-control" placeholder="Password"v-model="password">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        <span v-if="this.$store.state.aderror.password"class="text-danger">{{this.$store.state.aderror.password[0]}}</span>
      </div>
     
      <div class="row">
        
        <!-- /.col -->
        <div class="col-xs-4">
          <button type="submit" class="btn btn-primary btn-block btn-flat"@click="submit()">Register</button>
        </div>
        
      </div>
    

    

    
  </div>
  <!-- /.form-box -->
</div>
</template>
<script>
    export default {
         data(){
            return{
                username:'',
                email:'',
                password:''
            }
        },
        methods:{
            submit(){
                this.$store.dispatch("registeradmin",
                        {
                            email:this.email,
                            username:this.username,
                            password:this.password
                        }

                    ).then(response =>{
                            this.$router.push({'path':'/admin/users'})
                    });

                    
                
            }
        }
        }
</script>