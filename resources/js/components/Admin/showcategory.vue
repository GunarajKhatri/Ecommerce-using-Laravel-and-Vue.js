<template>
	<div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Category Details</h3>
              
              	
               <button type="submit" class="btn btn-info ml-5" style="margin-left:180px;"><span class="text-danger"@click="add">Add Category</span></button>
               
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
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover">
                <tr>
                  <th>ID</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Created on</th>
                  <th>Action</th>
                 
               
                </tr>
                <tbody>
                <tr v-for="item,key in items">
                  <td>{{item.id}}</td>
                 <td>{{item.category}}</td>
                  <td>{{item.description}}</td>
                  <td>{{item.created_at}}</td>
                  <td><div class="row"><i class="fa fa-edit"@click="showupdate(key,item.id)"></i>
                  	<span style="margin-left:30px;"></span>
                  <i class="fa fa-trash"@click="del(key,item.id)"></i></div>

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
          items(){
            return this.$store.state.catlists.data
          }
        } ,
        mounted(){
          this.$store.dispatch('getcategory')
        },
        methods:{
          add(){
            this.$router.push('/admin/category/create')
          },
          del(key,id){
            this.$store.dispatch('del',[key,id])
          },
          showupdate(key,id){
            this.$store.dispatch('getCatid',key)
            this.$router.push(`/admin/category/edit/${id}`);
          }
        }
    }
</script>