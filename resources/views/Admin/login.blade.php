<!DOCTYPE html>
<html >
<head>
  <title></title>
  @include('admin.head')
</head>
 <body class="hold-transition login-page">
        
    <div id="admin">


      
      <router-view></router-view>

</div>

<script type="text/javascript" src="{{asset('js/admin.js')}}"></script>
@include('admin.script')
</body>
</html>