<template>
	<div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">User Details</h3>
              
              	
               <button type="submit" class="btn btn-info ml-5" style="margin-left:180px;"><span class="text-danger"@click="create()">Add User</span></button>
               
              <div class="box-tools">
                <div class="input-group input-group-sm" style="width: 150px;">
                  <input type="text" name="table_search" class="form-control pull-right" placeholder="Search">

                  <div class="input-group-btn">
                    <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body table-responsive no-padding"style="overflow-x:hidden;">
              <table class="table table-hover">
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Action</th>
                 
               
                </tr>
                <tbody>
                <tr v-for="user,key in users">
                  <td>{{user.id}}</td>
                 <td>{{user.name}}</td>
                 <td>{{user.email}}</td>
                  
                  <td>
                  <i class="fa fa-trash"@click="del(key,user.id)"></i>

              </td>
                  
                 
              
                </tr>
                    
                </tbody>
               </table>
            </div>
            
          </div>
          
        </div>
      </div>
</template>
<script>
    export default {
    	computed:{
    		users(){
    			return this.$store.state.user.data;
    		}
    	},
      mounted(){
      		this.$store.dispatch('showuser');
      },
      methods:{
      	create(){
      		this.$router.push('/admin/user/create')
      	},
      	del(key,id){
      		this.$store.dispatch('deleteuser',[key,id]);
      	}
      }
    }
</script>