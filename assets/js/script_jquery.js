$(document).ready(function() { 
$("#enviarCorreo").on('click', function(){
  alert("El correo fue enviado correctamente")
})


$("#ingredientes").on("dblclick", function(){
$("#ingredientes").toggleClass("text-danger")
})


$("#preparacion").on('dblclick',function (){
  $("#preparacion").toggleClass("text-danger")
});

$("#panqueques").click( function() { 
  $("#panqueques-text").toggle("slow");
});

$("#tiramisu").click( function() { 
  $("#tiramisu-text").toggle("slow");
});

$("#plateada").click( function() { 
  $("#plateada-text").toggle("slow");
});


$("#enviarCorreo").tooltip({show: true})

$("#Favoritos").tooltip({show: true})

});