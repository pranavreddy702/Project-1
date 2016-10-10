
console.log("link");


//Add a keydown event listener that moves Mario left, right up and down.
// Call collision detection function here

$("#right").click(function(){
  $("#mario").animate({"left": "+=50px"},
    "slow", checkCollisions);
});

$("#left").click(function(){
  $("#mario").animate({"left": "-=50px"},
    "slow", checkCollisions);
});

$("#up").click(function(){
  $("#mario").animate({"top": "-=50px"},
    "slow", checkCollisions);
});

$("#down").click(function(){
  $("#mario").animate({"top": "+=50px"},
    "slow", checkCollisions);
});



// Moving boxes towards Mario
// Box will move at a random speed towards Mario
// Set the timer to dealy by 2 seconds

$("#btn1").click(function() {
    function loop() {
      var randomNumber = (Math.floor(Math.random() * 20) * 1000);
        $('.bomb').css({left: 970, top: (Math.floor(Math.random() * 2) * 400)});
        $('.bomb').delay(1000).animate ({left: '-=970',}, randomNumber , 'swing', function() {
            loop();
        });
    }
    loop();
});

// Move second box towards mario
// This box will have random speed and location as well

$("#btn1").click(function() {
    function loop_one() {
      var randomNumber = (Math.floor(Math.random() * 20) * 1000);
        $('#one').css({left: 970, top: (Math.floor(Math.random() * 2) * 400)});
        $('#one').delay(2000).animate ({left: '-=970',}, randomNumber , 'swing', function() {
            loop_one();
        });
    }
    loop_one();
});


// Box 3

$("#btn1").click(function() {
    function loop_one() {
      var randomNumber = (Math.floor(Math.random() * 20) * 1000);
        $('#two').css({left: 970, top: (Math.floor(Math.random() * 2) * 400)});
        $('#two').delay(3000).animate ({left: '-=970',}, randomNumber , 'swing', function() {
            loop_one();
        });
    }
    loop_one();
});

// Box 4

$("#btn1").click(function() {
    function loop_one() {
      var randomNumber = (Math.floor(Math.random() * 20) * 1000);
        $('#three').css({left: 970, top: (Math.floor(Math.random() * 2) * 400)});
        $('#three').delay(4000).animate ({left: '-=970',}, randomNumber , 'swing', function() {
            loop_one();
        });
    }
    loop_one();
});

// Box 5

$("#btn1").click(function() {
    function loop_one() {
      var randomNumber = (Math.floor(Math.random() * 20) * 1000);
        $('#four').css({left: 970, top: (Math.floor(Math.random() * 2) * 400)});
        $('#four').delay(5000).animate ({left: '-=970',}, randomNumber , 'swing', function() {
            loop_one();
        });
    }
    loop_one();
});

// Box 6

$("#btn1").click(function() {
    function loop_one() {
      var randomNumber = (Math.floor(Math.random() * 20) * 1000);
        $('#five').css({left: 970, top: (Math.floor(Math.random() * 2) * 400)});
        $('#five').delay(6000).animate ({left: '-=970',}, randomNumber , 'swing', function() {
            loop_one();
        });
    }
    loop_one();
});

//Box 7

$("#btn1").click(function() {
    function loop_one() {
      var randomNumber = (Math.floor(Math.random() * 20) * 1000);
        $('#six').css({left: 970, top: (Math.floor(Math.random() * 2) * 400)});
        $('#six').delay(7000).animate ({left: '-=970',}, randomNumber , 'swing', function() {
            loop_one();
        });
    }
    loop_one();
});


// Check if the box collides with Mario
// Alert a message if box collides with mario

////////////////////////////////

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
    alert("You found the real Sonic!!!");
  }
}

//Collision detection for the second box


// Create a timer
// Player wins when the timer runs out

var seconds_left = 90;
var interval = setInterval(function() {
    document.getElementById('counter').innerHTML = --seconds_left;

    if (seconds_left <= 0)
    {
       document.getElementById('counter').innerHTML = alert("You Lose!");
       clearInterval(interval);
    }
}, 1000);


