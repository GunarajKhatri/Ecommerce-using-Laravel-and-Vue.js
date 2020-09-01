 <template>
	<div>	
		<section class="order_details p_120">
		<div class="container">
			<div class="row order_d_inner">
				<div class="col-lg-4">
					<div class="details_item">
							<button type="submit" class="btn btn-info ml-5" style="margin-left:260px;margin-top:20px;"><span class="text-danger"@click="clearO(items.id)">Clear Order</span></button>
						<h4>Order Info</h4>
						
						
						<ul class="list">
							<li>
								<a href="#">
									<span>Order number</span> :{{items.id}}</a>
							</li>
							<li>
								<a href="#">
									<span>Date</span> : Los Angeles</a>
							</li>
							<li>
								<a href="#">
									<span>Total</span> : USD {{items.totalprice}}</a>
							</li>
							<li>
								<a href="#">
									<span>Payment method</span> : Check payments</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="details_item">
						<h4>Billing Address</h4>
						<ul class="list">
							<li>
								<a href="#">
									<span>Customer name</span> :{{items.firstname}}{{items.lastname}}</a>
							</li>
							<li>
								<a href="#">
									<span>Address</span> :{{items.address}}</a>
							</li>
							<li>
								<a href="#">
									<span>Email</span> :{{items.email}}</a>
							</li>
							<li>
								<a href="#">
									<span>Phone number</span> :{{items.number}}</a>
							</li>
							
							<li>
								<a href="#">
									<span>Country</span> : {{items.country}}</a>
							</li>
							
						</ul>
					</div>
				</div>
			</div>
<div class="order_details_table">
				<h2>Order Details</h2>
				<div class="table-responsive">
					<table class="table">
						<thead>
							<tr>
								<th scope="col">Product</th>
								<th scope="col">Quantity</th>
								<th scope="col">Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<p>{{items.product}}</p>
								</td>
								<td>
									<h5>x {{items.quantity}}</h5>
								</td>
								<td>
									<p>${{items.price}}</p>
								</td>
							</tr>


							
							
							
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</section>
	</div>
</template>
<script>
    export default {
    	data(){
    			return{
    				
    			}
    	},
    	mounted(){
       		this.$store.dispatch('orderdetail',this.$route.params.id);
            
    	},
        computed:{
        	items(){
        		return this.$store.state.orderdetail.data;
        	}
        },
        methods:{
        	
        	clearO(id){
        	this.$store.dispatch('clearorder',id).then(response =>{
                            this.$router.push('/admin/order/');
                    });
        	
       

        	}
        }
    }
</script>
<style scoped>
li{
	list-style-type:none;
}

.order_d_inner .details_item h4 {
  border-bottom: 1px solid #eee;
  padding-bottom: 12px;
  font-size: 18px;
  color: #222222;
  padding-left: 18px; }
.order_d_inner .details_item .list {
  padding-left: 18px; }
  .order_d_inner .details_item .list li {
    margin-bottom: 8px; }
    .order_d_inner .details_item .list li:last-child {
      margin-bottom: 0px; }
    .order_d_inner .details_item .list li a {
      font-size: 14px;
      color: #222222;
      font-family: "Roboto", sans-serif; }
      .order_d_inner .details_item .list li a span {
        width: 145px;
        display: inline-block;
        color: #777777; }

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