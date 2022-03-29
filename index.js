
var MyURL = "https://rickandmortyapi.com/api/character/2";
var textClass = ".picklerick";

$(".rick").click(function(){
$.get(MyURL,
function(data, status){
  $(textClass).text(data.name);
  $(textClass).css({ 'color': 'red', 'font-size': '200%' });
});
});


$(".morty").click(function(){
      $(textClass).text("Hi I'm Pickle Rick!");
      $(textClass).css({ 'color': 'black', 'font-size': '100%' });
    });