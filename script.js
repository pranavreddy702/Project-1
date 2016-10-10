
console.log("link");


//Add a keydown event listener that moves Mario left, right up and down.


$("#right").click(function(){
  $("#mario").animate({"left": "+=50px"}, "slow", checkCollisions);
});

$("#left").click(function(){
  $("#mario").animate({"left": "-=50px"}, "slow", checkCollisions);
});

$("#up").click(function(){
  $("#mario").animate({"top": "-=50px"}, "slow", checkCollisions);
});

$("#down").click(function(){
  $("#mario").animate({"top": "+=50px"}, "slow", checkCollisions);
});


// Make object fall from the top of the screen to the bottom to distract the user
// Objects will fall faster with time

    // function fallingSnow() {

    //     var snowflake = $('<div class="snowflakes"></div>');
    //     $('#snowZone').prepend(snowflake);
    //     snowX = Math.floor(Math.random() * $('#flexbox').width());
    //     snowSpd = Math.floor(Math.random() + 9000);

    //     snowflake.css({'left':snowX+'px'});
    //     snowflake.animate({
    //         top: "400px",
    //         opacity : "900",

    //     }, snowSpd, function(){
    //         $(this).remove();
    //         fallingSnow();
    //     });

    // }
    // var timer = Math.floor(Math.random() +1900);

    // window.setInterval(function(){
    //     fallingSnow();
    // }, timer);


// Moving boxes towards Mario
// Box will move at a random speed towards Mario
// Set the timer to dealy by 2 seconds

$("#btn1").click(function() {
    function loop() {
      var randomNumber = (Math.floor(Math.random() * 20) * 1000);
        $('.bomb').css({left: 970, top: (Math.floor(Math.random() * 2) * 400)});
        $('.bomb').delay(1000).animate ({
            left: '-=970',
        }, randomNumber , 'swing', function() {
            loop();
        });
    }
    loop();
});

// Second box

$("#btn1").click(function() {
    function loop() {
      var randomNumber = (Math.floor(Math.random() * 20) * 1000);
        $('.bomb_two').css({left: 970, top: (Math.floor(Math.random() * 2) * 400)});
        $('.bomb_two').delay(2000).animate ({
            left: '-=970',
        }, randomNumber , 'swing', function() {
            loop();
        });
    }
    loop();
});

// Collision function for bomb 2

function getPositions(box) {
  var $box = $(box);
  var pos = $box.position();
  var width = $box.width();
  var height = $box.height();
  return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
}

function comparePositions(p1, p2) {
  var x1 = p1[0] < p2[0] ? p1 : p2;
  var x2 = p1[0] < p2[0] ? p2 : p1;
  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
}

function checkCollisions(){
  var box = $(".bomb_two");
  var pos = getPositions(box);
  var pos2 = getPositions(this);
  var horizontalMatch = comparePositions(pos[0], pos2[0]);
  var verticalMatch = comparePositions(pos[1], pos2[1]);
  var match = horizontalMatch && verticalMatch;
  if (match) {
    alert("You Lose !!!");
  }
}


// Check if the box collides with Mario
// Alert a message if box collides with mario


function getPositions(box) {
  var $box = $(box);
  var pos = $box.position();
  var width = $box.width();
  var height = $box.height();
  return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
}

function comparePositions(p1, p2) {
  var x1 = p1[0] < p2[0] ? p1 : p2;
  var x2 = p1[0] < p2[0] ? p2 : p1;
  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
}

function checkCollisions(){
  var box = $(".bomb");
  var pos = getPositions(box);
  var pos2 = getPositions(this);
  var horizontalMatch = comparePositions(pos[0], pos2[0]);
  var verticalMatch = comparePositions(pos[1], pos2[1]);
  var match = horizontalMatch && verticalMatch;
  if (match) {
    alert("You Lose !!!");
  }
}
/////////////////////



