
console.log("link");


//Add a keydown event listener that moves Mario left, right up and down.
 $(document).keydown(function(e){
    if (e.keyCode == 39) {
       $('#mario').animate({
            'marginLeft' : "+=50px"
        });
  }

});

 $(document).keydown(function(e){
    if (e.keyCode == 37) {
      $('#mario').animate({
   'marginLeft' : "-=50px"
 });
  }
});

$(document).keydown(function(e){
    if (e.keyCode == 38) {
      $('#mario').animate({
   'marginTop' : "-=50px"
 });
  }
});

$(document).keydown(function(e){
    if (e.keyCode == 40) {
      $('#mario').animate({
   'marginTop' : "+=50px"
 });
  }
});


// Make object fall from the top of the screen to the bottom

    function fallingSnow() {

        var snowflake = $('<div class="snowflakes"></div>');
        $('#snowZone').prepend(snowflake);
        snowX = Math.floor(Math.random() * $('#flexbox').width());
        snowSpd = Math.floor(Math.random() + 9000);

        snowflake.css({'left':snowX+'px'});
        snowflake.animate({
            top: "900px",
            opacity : "900",

        }, snowSpd, function(){
            $(this).remove();
            fallingSnow();
        });

    }
    var timer = Math.floor(Math.random() +1900);

    window.setInterval(function(){
        fallingSnow();
    }, timer);

// Make everything inside of the flexbox











