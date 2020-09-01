<template>
	<div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Products Details</h3>
              
              	
               <button type="submit" class="btn btn-info ml-5" style="margin-left:180px;"><span class="text-danger"@click="add">Add Product</span></button>
               
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
                  <th>Category</th>
                  <th>Product name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Action</th>
                 
               
                </tr>
                <tbody>
                <tr v-for="product,n in products.data":key="product.id">
                  <td>{{product.id}}</td>
                 <td>{{product.category}}</td>
                 <td>{{product.name}}</td>
                  <td><img :src="`/storage/${product.image}`" style="width:100px;height:100px;"></td>
                  <td>{{product.price}}</td>
                  <td>{{product.stock}}</td>
                  <td><div class="row"><i class="fa fa-edit"@click="showupdate(n,product.id)"></i>
                  	<span style="margin-left:30px;"></span>
                  <i class="fa fa-trash"@click="del(n,product.id)"></i></div>

              </td>
                  
                 
              
                </tr>
                    
                </tbody>
               </table>
            </div>
            
          </div>
          <div v-if="products.total>0">
        <pagination :data="products" @pagination-change-page="getResult">
          <span slot="prev-nav"class="page-item"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
          <span slot="next-nav"class="page-item"> <i class="fa fa-chevron-right" aria-hidden="true"></i></span>
        </pagination> 
        </div>
        </div>
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
          items(){
            return this.$store.state.prodlists.data
          }
        } ,*/
        mounted(){
          //this.$store.dispatch('getproduct')
          this.$store.dispatch('getproduct');
            this.getResult()
        },
        methods:{
          add(){
            this.$router.push('/admin/product/create')
          },
          del(n,id){
            this.$store.dispatch('delprod',[n,id]).then(response=>{
                this.products.data.splice(n,1);
            });
          },
          showupdate(n,id){
            //console.log(this.products.data)
            this.$store.dispatch('getProdid',[n,this.products.data])
            this.$router.push(`/admin/product/edit/${id}`);
          },
          //pagination
          getResult(page = 1){
          axios.get('/api/products?page=' + page).then((response)=>{
      this.products=response.data
      console.log(this.products)
      });
        }
        }
    }
</script>