<template>
	<div class="box">
<div class="order_details_table" style="top:0px;" v-if="items!=''">
				<h2>Order Details</h2>
				<div class="table-responsive">
					<table class="table">
						<thead>
							<tr>
								<th scope="col">Product</th>
								<th scope="col">Quantity</th>
								<th scope="col">Total</th>
								<th scope="col">Order Status</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in items">
								<td>
									<p>{{item.product.name}}</p>
								</td>
								<td>
									<h5>x {{item.quantity}}</h5>
								</td>
								<td>
									<p>${{item.product.price}}</p>
								</td>
								<td v-if="item.order_status=='1'">
									<p>Completed</p>
								</td>
								<td v-else>
									<p>Pending</p>
								</td>
							</tr>
							
							
							
							<tr>
								<td>
									<h4>Total</h4>
								</td>
								<td>
									<h5></h5>
								</td>
								<td>
									<p>${{totalprice}}</p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div v-else>
			<h3 style="margin-top:20px;margin-left:40%;">No orders are done yet!!</h3>	
			</div>	
			</div>	
</template>
<script>
    export default {
    	data(){
    		return{
    			id:'',
    			user:'',
    			totalp:0,
    			prod:[]
    		}
    	},
       mounted(){
       	
       	this.$store.dispatch('ordereditem',this.$route.params.id);

       	
       },
       computed:{
       	items(){
       		return this.$store.state.ordereditem.data;
       	},
       	totalprice(){
       		
       			this.prod=this.$store.state.ordereditem.data;
	       		if(this.prod!=null && this.prod.length>0){

       		for (var i = 0; i < (this.prod).length; i++) {
       			var q=this.prod[i].quantity
       			var p=this.prod[i].product.price
       			var total=parseInt(q)*parseInt(p);
       			this.totalp+=total;
       		}
       	}
       		return this.totalp;
       	}
       		}
       	}
       	</script> 
       	<style scoped>

.order_details_table {
  background: #f9f9ff;
  padding: 30px;
  margin-top: 30px; }
  .order_details_table h2 {
    color: #222222;
    font-size: 18px;
    border-bottom: 1px solid #dddddd;
    padding-bottom: 15px; }
  .order_details_table .table {
    margin-bottom: 0px; }
    .order_details_table .table thead tr th {
      border-bottom: 1px solid #ddd;
      font-size: 14px;
      font-family: "Roboto", sans-serif;
      font-weight: normal; }
    .order_details_table .table tbody tr td p {
      margin-bottom: 0px; }
    .order_details_table .table tbody tr td h5 {
      color: #222222;
      margin-bottom: 0px; }
    .order_details_table .table tbody tr td h4 {
      font-size: 14px;
      text-transform: uppercase;
      margin-bottom: 0px;
      color: #222222; }
    .order_details_table .table tbody tr:last-child td {
      border-top: 1px solid #ddd; }
      .order_details_table .table tbody tr:last-child td p {
        color: #222222; } 
</style>