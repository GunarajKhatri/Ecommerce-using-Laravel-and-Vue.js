<template>
	<div>
		<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
<section class="sidebar">
      <!-- Sidebar user panel -->
      <!-- <div class="user-panel">
        <div class="pull-left image">
          
        </div>
        <div class="pull-left info">
          <p>Gunaraj Online Shop</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div> -->
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">MAIN NAVIGATION</li>
        <li class="active treeview">
          <a href="#">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li class="active">
              <router-link to="/admin/category">Category</router-link></li>
            <li class="active">
              <router-link to="/admin/product">Product</router-link>
          </li>
          <li class="active">
              <router-link to="/admin/order">Orders</router-link>
          </li>
          <li class="active">
              <router-link to="/admin/customers">Customers</router-link>
          </li>
          <li class="active">
              <router-link to="/admin/users">Users</router-link>
          </li>
            
            
          </ul>
        </li>
        
              
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
	</div>
</template>
