<template>
	<div>
		<center>
      <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Add Product</h3><br>
            <div class="alert alert-success" v-if="this.$store.state.productmsg"><h4><b>{{this.$store.state.productmsg}}</b></h4></div>
            </div>
            
              	<div class="form-group">
              		<div class="box-body">
                  <label for="exampleInputproduct">Name</label>
                  <input type="text" class="form-control"name="product" id="exampleInputproduct" placeholder="Enter name of product" v-model="items.name">
                  <span v-if="this.$store.state.producterror.name" class="text-danger">{{this.$store.state.producterror.name[0]}}</span> 
              </div>
              </div>
              <div class="form-group">
                  <label>Enter description of product</label>
                  <textarea class="form-control" rows="3" placeholder="Enter description " v-model="items.description"></textarea>
                  <span v-if="this.$store.state.producterror.description" class="text-danger">{{this.$store.state.producterror.description[0]}}</span>
                </div>
              <div class="form-group">
              		<div class="box-body">
                  <label for="exampleInput">Enter Price</label>
                  <input type="number"min="0" step="5" class="form-control"name="price" id="exampleInputprice" placeholder="Enter price e.g Rs.100" v-model="items.price">
                  <span v-if="this.$store.state.producterror.price" class="text-danger">{{this.$store.state.producterror.price[0]}}</span> 
              </div>
              </div>   
              <div class="form-group">
              		<div class="box-body">
                  <label for="exampleInput">Enter stock</label>
                  <input type="number"min="0" step="1" class="form-control"name="stock" id="exampleInputstock" placeholder="Enter stock" v-model="items.stock">
                  <span v-if="this.$store.state.producterror.stock" class="text-danger">{{this.$store.state.producterror.stock[0]}}</span> 
              </div>
              </div>
              <div class="form-group">
                  <label>Select Category</label>
                  <select class="form-control" @change="onChange($event)">
                  	<option>Select Category</option>
                    <option v-for="categor in categories" :value="categor.id">{{categor.category}}</option>
                    
                  </select>
                  <span v-if="this.$store.state.producterror.category" class="text-danger">{{this.$store.state.producterror.category[0]}}</span>
                </div>
                
              <div class="form-group">
              		<div class="box-body">
                  <label for="">Upload Photo of Product</label>
                  <input type="file" name="image"@change="GetImage" accept="image/*"><br>
                  <img :src="avatar" alt="image" style="width:200px;height:200px;" v-if="avatar">
                  <span v-if="this.$store.state.producterror.image" class="text-danger">{{this.$store.state.producterror.image[0]}}</span> 
              </div>
              </div>
               

              <div class="box-footer">
                <button type="submit" class="btn btn-primary" @click="addpost()">Add Product</button>
              </div>
              
              	

              	</div>
            
          </div>
          </div>
          
        
         

         </center>

	</div>
</template><script>
    export default {
        data(){
        	return{
        		items:{
        			name:'',
        			description:'',
        			price:'',
        			stock:'',
        			category_id:'',
        			imgdetail:''
        		},
        		file:null,
        		forms:'',
        		avatar:null
        	}
        },
        computed:{
        	categories(){
        		 return this.$store.state.catlists.data;	 
        	}
        },
        mounted(){
        	this.forms=new FormData()
        	this.$store.dispatch('getcategory')
        },
        methods:{
        	onChange:function(event){
        		this.items.category_id=event.target.value;
        		console.log(this.items.category_id)
        	},
        	 GetImage(e){
        	 	this.imgdetail=e
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
        addpost() {
        	 this.forms.append('name',this.items.name);
        	 this.forms.append('price',this.items.price);
        	 this.forms.append('stock',this.items.stock);
        	 this.forms.append('description',this.items.description);
        	 this.forms.append('category',this.items.category_id);
        	this.$store.dispatch('addproduct',this.forms).then(response =>{
                            this.items=''
                            this.image=''
                            this.avatar=''
                            this.imgdetail=''
                            this.$router.push('/admin/product')
                    });
        	
	  
   
        }
        }
    }
</script>