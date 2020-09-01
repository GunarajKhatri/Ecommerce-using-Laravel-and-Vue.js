<template>
	<div class="row"style="background-color:white;">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Order Details</h3>
              
              	
               
               
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
            <div class="box-body table-responsive no-padding"style="margin-top:40px;">
              <table class="table table-hover">
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Order Status</th>
                  <th>View Detail</th>
                 
               
                </tr>
                <tbody>
                <tr v-for="item,key in items">
                  <td>{{item.id}}</td>
                 <td>{{item.firstname}} {{item.lastname}}</td>
                  <td>{{item.product.name}}</td>
                  <td>{{item.product.price}}</td>
                  <td>{{item.quantity}}</td>
                  <td v-if="item.order_status=='0'" class="badge badge-danger">Pending</td>
                  <td v-else class="badge badge-success">Completed</td>
                  <td @click="viewdetail(item.id)"id="vew">view</td>

                      
                  
                 
              
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
          data(){
            return{
                order:[]
            }
          },
      computed:{
        items(){
          return this.$store.state.allorder.data;
        }
      },
      mounted(){
        this.$store.dispatch('getorder')
      },
      methods:{
        viewdetail(id){

            this.$store.dispatch('orderdetail',id).then(response =>{
                            this.$router.push(`/admin/order/detail/${id}`);
                    });
            
            
        }
      }
    }
</script>
<style scoped>
#vew{
  cursor:pointer;
}
#vew:hover{
  color:blue;
}

</style>