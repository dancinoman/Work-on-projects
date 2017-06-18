
//jquery made to reorder and place the product in order
$("document").ready(function(){
var items = 9;
var link = 'image\\chair2.jpg';
var itName = "chair";

while (items !=0){
  $("#mrk-borul").append(function(n){
          return "<li class = 'prod-li'> <a href='#link'><img class= 'prod'; src=" + link + " alt= " + itName + " </a></li>"
             });
      items--;
   }

});
