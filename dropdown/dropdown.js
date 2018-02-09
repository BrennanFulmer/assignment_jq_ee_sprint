
/*
  cd Documents/Viking/JS/jq_sprint/dropdown

  https://www.vikingcodeschool.com/dashboard#/falling-in-love-with-javascript/practice-with-events-and-effects

  https://stackoverflow.com/questions/9279842/make-an-unordered-list-into-a-drop-down-menu#9280645

  https://stackoverflow.com/questions/19222300/slidetoggle-and-li-repeated-clicking-reorder-the-list
*/

$("li").click(function(selected) {
  var list = $("ul");
  list.children().slideToggle(1800);

  list.prepend(this);

});