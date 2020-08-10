

$('#button').click(function(){
   var username= $('#username').val();
   var password = $('#Password').val();
  
  if(username !==''){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username)){
      if(password !==''){
        send(username,password);
      }else{
        $('.pass').html('Provide password'); 
          setTimeout(() => {
            $('.pass').html(''); 
          },4000);
         
      }
    }else{
        $('.user').html('Wrong email format')
        setTimeout(() => {
            $('.user').html('')
          },4000);
    }
   
  }else{
    $('.user').html('Provide User email')
    setTimeout(() => {
        $('.user').html('')
      },4000);
    
}
   
   
   
})

function send(username,password){
     $control ='Login';
    var data = 'email='+username+'&password='+password+'&control='+$control;
    $.ajax({
      method:'POST',
      data:data,
      url:'server/index.php',
      cache:false,
      success:function(res){
         if(res==='1'){
          $('.user').html('user doesnt exist'); 
          setTimeout(() => {
            $('.user').html(''); 
          },4000);
         }

         if(res==='2'){
          $('.pass').html('wrong password'); 
          setTimeout(() => {
            $('.pass').html(''); 
          },4000);
         }
         if(res=== '3'){
           window.location="/web1/admin";
         }
      }
    })

    

}