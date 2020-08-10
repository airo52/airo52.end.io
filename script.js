window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
    $('#serviceBox').load('services.html')
  }, 2000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".Contact").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".Team").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".home").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".Service").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
 
});
document.querySelector(".about").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});

$('#submit').click(function(){
  var fullName = $('#name').val();
  var tel = $('#tel').val();
  var email = $('#email').val();
  var message = $('#message').val();
  //alert(message)
  if(fullName !=='' && tel !=='' && email !=='' && message !==''){
    var telphone =tel.replace(/\D/g,'');
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      $control ='contactss';
      var data = 'email='+email+'&fullName='+fullName+'&control='+$control+'&telephone='+telphone+'&message='+message;
          
        $.ajax({
          
            method:'POST',
            data:data,
            url:'admin/server/index.php',
            cache:false,
            success:function(res){
              $('#name').val('');
                $('#tel').val('');
                $('#email').val('');
                 $('#message').val('');
              $('#details').html(res);
    setTimeout(() => {
      $('#details').html('');
    }, 2000);
    
            }
        })

    }else{
      $('#details').html('wrong email format');
    setTimeout(() => {
      $('#details').html('');
    }, 2000);
    }

  }else{
    $('#details').html('all fileds are required');
    setTimeout(() => {
      $('#details').html('');
    }, 2000);
  }

})

