

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
const socket = io();
socket.on('response',(data)=>{
    var response = JSON.parse(data);
    //alert(response.password)
})

socket.on('loged',()=>{
    window.location.href='/user';
})
function send(username,password){
    
    

    fetch('/login',{
        method:'post',
        headers:{
            'Content-type': 'application/json'
        },
        body:JSON.stringify({username:username,password:password})

      
    })
    .then(function(res){
        //alert(res)
        console.log(res);
    })
    .catch(function(err){
        console.log(err);
    })

}