<template>
	<div>
		<center>
      <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Update Product</h3><br>
            <!-- <div class="alert alert-success" v-if="this.$store.state.productmsg"><h4><b>{{this.$store.state.productmsg}}</b></h4></div> -->
            </div>
            
              	<div class="form-group">
              		<div class="box-body">
                  <label for="exampleInputproduct">Name</label>
                  <input type="text" class="form-control"name="product" id="exampleInputproduct" placeholder="Enter name of product" v-model="lists.name">
                  <!-- <span v-if="this.$store.state.producterror.name" class="text-danger">{{this.$store.state.producterror.name[0]}}</span> --> 
              </div>
              </div>
              <div class="form-group">
                  <label>Enter description of product</label>
                  <textarea class="form-control" rows="3" placeholder="Enter description " v-model="lists.description"></textarea>
                  <!-- <span v-if="this.$store.state.producterror.description" class="text-danger">{{this.$store.state.producterror.description[0]}}</span> -->
                </div>
              <div class="form-group">
              		<div class="box-body">
                  <label for="exampleInput">Enter Price</label>
                  <input type="number"min="0" step="5" class="form-control"name="price" id="exampleInputprice" placeholder="Enter price e.g Rs.100" v-model="lists.price">
                <!--   <span v-if="this.$store.state.producterror.price" class="text-danger">{{this.$store.state.producterror.price[0]}}</span>  -->
              </div>
              </div>   
              <div class="form-group">
              		<div class="box-body">
                  <label for="exampleInput">Enter stock</label>
                  <input type="number"min="0" step="1" class="form-control"name="stock" id="exampleInputstock" placeholder="Enter stock" v-model="lists.stock">
                  <span v-if="this.$store.state.producterror.stock" class="text-danger">{{this.$store.state.producterror.stock[0]}}</span> 
              </div>
              </div>
              <div class="form-group">
                  <label>Select Category</label>
                  <select class="form-control" @change="onChange($event)">
                  	<!-- <option>Select Category</option> -->
                    <option v-for="categor in categories" :value="categor.id":selected="categor.category==catematch?true:false">{{categor.category}}</option>
                    
                  </select>
                  <!-- <span v-if="this.$store.state.posterrors.category" class="text-danger">{{this.$store.state.posterrors.category[0]}}</span> -->
                </div>
                
              <div class="form-group">
              		<div class="box-body">
                  <label for="">Upload Photo of Product</label>
                  <input type="file" name="image"@change="GetImage" accept="image/*"><br>
                  <img :src="avatar" alt="image" style="width:200px;height:200px;" v-if ="avatar">
                  <!-- <span v-if="this.$store.state.producterror.image" class="text-danger">{{this.$store.state.producterror.image[0]}}</span>  -->
              </div>
              </div>
               

              <div class="box-footer">
                <button type="submit" class="btn btn-primary" @click="updateproduct()">Update Product</button>
              </div>
              
              	

              	</div>
            
          </div>
          </div>
          
        
         

         </center>

	</div>
</template>
<script>
    export default {
        
        data(){
          return{
            lists:{},
            catematch:this.$store.state.updateproduct.category,
            avatar:`/storage/${this.$store.state.updateproduct.image}`,
            forms:''

          }
          
        },
        mounted(){
          this.lists=this.$store.state.updateproduct
          console.log(this.lists)
           this.forms=new FormData()
          this.$store.dispatch('getcategory')
          this.forms.append('image',this.lists.image);
          
        },
        computed:{
          categories(){
             return this.$store.state.catlists.data;  
          }
        },
        methods:{
          onChange:function(event){
            this.lists.category_id=event.target.value;
            console.log(this.lists.category_id)
          },
           GetImage(e){
        let image=e.target.files[0];
        this.read(image);
       this.forms.append('image',image);
        },
        read(image){
        let reader=new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e =>{
        this.avatar=e.target.result
        }
        },
        updateproduct(){
         
          this.forms.append('name',this.lists.name);
          this.forms.append('stock',this.lists.stock);
          this.forms.append('price',this.lists.price);
          this.forms.append('_method','PATCH');
           this.forms.append('description',this.lists.description);
           this.forms.append('category',this.lists.category_id);
          this.$store.dispatch('updateproduct',[this.forms,this.lists.id]).then(response =>{
                            this.$router.push({'path':'/admin/product'})
                    });
         
          //[this.forms,this.lists.id,]
        }
      }
      }
    
</script>






     


