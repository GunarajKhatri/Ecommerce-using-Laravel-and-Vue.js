<template>
	<div class="box box-warning">
            <div class="box-header with-border">
              <h3 class="box-title">Add category</h3><br>
              <div class="alert alert-success" v-if="this.$store.state.successmsg"><h4><b>{{this.$store.state.successmsg}}</b></h4></div>
            </div>
             <div class="box-body">
              
                <!-- text input -->
                <div class="form-group">
                  <label>Enter category name</label>
                  <input type="text" class="form-control" placeholder="Enter category"v-model="category">
                  <span v-if="this.$store.state.categoryerror.category" class="text-danger">{{this.$store.state.categoryerror.category[0]}}</span>
                </div>
                

                <!-- textarea -->
                <div class="form-group">
                  <label>Enter description</label>
                  <textarea class="form-control" rows="3" placeholder="Enter description " v-model="description"></textarea>
                  <span v-if="this.$store.state.categoryerror.description" class="text-danger">{{this.$store.state.categoryerror.description[0]}}</span>
                </div>
                </div>
                <div class="box-footer">
                <button type="submit" class="btn btn-primary"@click="Add()">Add category</button>
              </div>
        </div>
</template>
<script>
    export default {
      data() {
      	return{
      	category:"",
      	description:""
      }
  },
      methods:{
      	Add(){
      		this.$store.dispatch('Addcategory',{
             category:this.category,
             description:this.description
      		});
      	}
      }
    }
</script>