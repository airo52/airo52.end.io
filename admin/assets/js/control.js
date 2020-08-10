$(document).ready(function(){
    var control ='check';
var data = 'control='+control;
$.ajax({
method:'POST',
data:data,
url:'server/index.php',
cache:false,
success:function(res){
  if(res === 'no'){
    window.location="/web1/admin/Login.html";
  }else{
    var response=JSON.parse(res);
    
    $('#userProfile').attr("src",response.profile);
    $('#Name').html(response.username);
    $.notify({
        icon: 'pe-7s-gift',
        message: "Welcome <b>Admin</b> ."+response.username

    },{
        type: 'info',
        timer: 4000
    });
  }
}
})

$('#logout').click(function(){
    var control ='logout';
    var data = 'control='+control;
    $.ajax({
    method:'POST',
    data:data,
    url:'server/index.php',
    cache:false,
    success:function(res){
        if(res === 'ok'){
            window.location="/web1/admin/Login.html";
        }
    }
})
})
    //demo.initChartist();


});