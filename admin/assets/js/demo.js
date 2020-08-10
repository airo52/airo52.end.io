
var notification = document.getElementById('not');
var profile = document.getElementById('profile');
//var Profiled = document.getElementById('Profiled');
//var div = document.getElementById('content');
notification.addEventListener('click',function(){
   $('#content').load('not.html');
   
})
profile.addEventListener('click',function(){
  $('#content').load('user.html');
})
