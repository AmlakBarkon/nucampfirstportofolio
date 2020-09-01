console.log("javascript js")
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });
  $('#mybutton').on('click', function(event) {
    event.preventDefault(); // To prevent following the link (optional)
    alert("please login here")
   document.open("index.html")
  });