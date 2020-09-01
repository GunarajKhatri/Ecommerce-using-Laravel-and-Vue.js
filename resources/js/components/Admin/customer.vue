<template>
<div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Customer Details</h3>
              
              	
               
               
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
                  <th>Total Order</th>
                 
               
                </tr>
                <tbody>
                <tr v-for="user,key in users">
                  <td>{{user.id}}</td>
                 <td>{{user.name}}</td>
                 <td>{{user.email}}</td>
                 <td class="badge badge-primary"id="order" @click="order(user.id)"><b>	{{user.orders.length}}</b></td>
                  
                
                  
                 
              
                </tr>
                    
                </tbody>
               </table>
            </div>
            
          </div>
          
        </div>
      </div>	
</template>
<script>
	export default{
			mounted(){
				this.$store.dispatch('getcustomer');
			},
			computed:{
					users(){		
						return this.$store.state.customers.data;
					}
			},
			methods:{
				order(id){
						this.$router.push(`/admin/customer/${id}/order`);
				}
			}

	}

</script>

<style scoped>
#order{
	cursor:pointer;
}
#order:hover{
	background-color:blue;
}


</style>