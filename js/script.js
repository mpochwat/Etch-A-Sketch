function createGrid(size) {
  var boxSize = (500 - 2*size)/size;
  var container = $('.container').html("");
  for (var row=0; row < size; row++) {
    for (var column = 0; column < size; column++) {
      container.append( $("<div id='square'></div").height(boxSize).width(boxSize) );
    }
  } 
}

function clear() {
  var newSize = prompt("What size x times x grid would you like? Choose a number for x between 0 and 64.");

  if (newSize > 0 && newSize < 64) {
    createGrid(newSize);
  }
  else if (newSize == 0) {

  }
  else {
    clear;
  }
}

$(document).ready(function () {

  createGrid(16);

  $('div').on("mouseenter", function() {
    $(this).css("background-color", "white")
  })

  $('#clear').on("click", function () {
    clear();

    $("div").on("mouseenter", function () {
    $(this).css("background-color", "white")
  });
  })
});