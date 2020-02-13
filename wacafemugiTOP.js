$(function(){
  $("#mypic img:not(:first-child)").hide();
  setInterval(function() {
    $("#mypic img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo("#mypic");
  },5000);
});
