/*global $*/

  function checkCollisionsgood() {
       var sharkleft = $("#shark").offset().left;
        var goodfishleft= $(".goodfish").first().offset().left;
        
        
        var sharkright = sharkleft +  $("#shark").width();
        var goodfishright = goodfishleft + $(".goodfish").first().width();
        var goodfishbottomleft = goodfishleft + $(".goodfish").first().height();
        var goodfishbottomright = goodfishright + $(".goodfish").first().height();
        var sharktop =  $("#shark").offset().top;
      
      var goodfishbottom= $(".goodfish").first().offset().top + $(".goodfish").height();
       console.log(goodfishbottom);
        console.log(sharkleft, sharkright, goodfishright, goodfishleft, $(".goodfish").first().offset());
        if (sharkleft < goodfishright && sharkright > goodfishleft && goodfishbottom > sharktop) {
        alert("fishey saw you..you died");
        }
       
  }
      
      
      function checkCollisionsbad() {
        var sharkleft = $("#shark").offset().left;
        var badfishleft= $("#badfish").first().offset().left;
        var sharkright = sharkleft +  $("#shark").width();
        
       
        var badfishright = badfishleft + $("#badfish").first().width();
       // var goodfishbottomleft = goodfishleft + $(".goodfish").first().height();
      //  var goodfishbottomright = goodfishright + $(".goodfish").first().height();
        var sharktop =  $("#shark").offset().top;
      
        var badfishbottom= $("#badfish").first().offset().top + $("#badfish").height();
        console.log(badfishbottom);
        console.log(sharkleft, sharkright, badfishright, badfishleft, $("#badfish").first().offset());
        if (sharkleft < badfishright && sharkright > badfishleft && badfishbottom > sharktop) {
        alert("IT SAW YOU... YOu Died ");
        }
      }
      
function randomizeXPosOfFish(fish) {
  fish.css('left', randomPercentage() + '%');
}
function randomPercentage() {
  return Math.floor(Math.random() * 100);
}

var score=0;
function setScore(scoreChange){
  score=score+scoreChange;
  $(".score-value").text(score);
}

var moveFishInterval;
function pauseGame(){ 
  if (moveFishInterval) {
    clearInterval(moveFishInterval);
  }
}

var sharkPosition;

function startgame() {
  sharkPosition = $("#shark").position();
  
  moveFishInterval = setInterval(function () {
    var fishPosition = $('.goodfish').position();
    checkCollisionsgood();
    checkCollisionsbad();
    var currentTop = fishPosition.top; 
    // if shark's position is equal to the fish's position increase score
    // if the fish's position is greater than the shark's position then you gain an increase or decrease of a point
    if (sharkPosition.left === fishPosition.left && sharkPosition.top == fishPosition.top) {
      // if the shark collides with the good fish the score increases by 3
      // if the shark collides with the bad fish the score decreases by 5
      setScore(3);
    }
    var currentBadtop = $('#badfish').position().top; 
    var nextBadtop = currentBadtop + 15;
    var nextTop = currentTop + 20;
    console.log('goodfish: ' + nextTop);
    if (nextTop > 500) {
      nextTop = 0;
      randomizeXPosOfFish($(".goodfish"));
    }
    if (nextBadtop > 500) {
      nextBadtop = 0;
      randomizeXPosOfFish($("#badfish"));
    }
    $('.goodfish').css('top', nextTop);
    $('#badfish').css('top', nextBadtop);
  }, 100);
}

 $(document).ready(function () {
  $(".start").click(startgame);
  
  $("#pause").click(pauseGame);
  
  
    // Games have a lot of code that runs over and over again.
    // This code does everything from updating the location of
    // the player (i.e. moving the player when the user presses
    // the arrow keys) to simulating physics (i.e. making objects
    // fall).
    var $shark = $("#shark");
    var sharkLeft = $shark.offset().left;
    var sharkRight = sharkLeft + $("#shark").width();
    
    // shark movement
    $("body").off('keydown.moveShark')
      .on('keydown.moveShark', function(event) {
        //shark will move left
      if(event.which === 37){
        console.log('left: ' + $shark.offset().left);
        $("#shark").css("left", $("#shark").offset().left - 20);
        $("#shark").removeClass("mirror");
      } else if(event.which === 39){
        // shark will move right
        $("#shark").css("left", $("#shark").offset().left + 20 );
        $("#shark").addClass("mirror");
      }
      
      sharkPosition = $("#shark").position();
      event.preventDefault();
      event.stopPropagation();
      
      // getting the shark's position
    
      
      
    });
    
   
    });
      
      
    


