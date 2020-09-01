<template>
	<div class="box box-warning">
            <div class="box-header with-border">
              <h3 class="box-title">Update category</h3><br><br>
            </div>
             <div class="box-body">
              
                <!-- text input -->
                <div class="form-group">
                  <label>Enter category name</label>
                  <input type="text" class="form-control" placeholder="Enter category"v-model="lists.category">
                  <span v-if="this.$store.state.categoryerror.category" class="text-danger">{{this.$store.state.categoryerror.category[0]}}</span>
                </div>
                

                <!-- textarea -->
                <div class="form-group">
                  <label>Enter description</label>
                  <textarea class="form-control" rows="3" placeholder="Enter description " v-model="lists.description"></textarea>
                  <span v-if="this.$store.state.categoryerror.description" class="text-danger">{{this.$store.state.categoryerror.description[0]}}</span>
                </div>
                </div>
                <div class="box-footer">
                <button type="submit" class="btn btn-primary"@click="Update(lists)">Update category</button>
              </div>
        </div>
</template>

<script>
    export default {
        mounted(){
          this.lists=this.$store.state.updatecategory
          
        },
        data(){
          return{
            lists:{}
          }
        },
        methods:{
          Update(items){
            this.$store.dispatch('updateCategory',items).then(response =>{
                            this.$router.push({'path':'/admin/category'})
                    });
          }
        }
    }
</script>
