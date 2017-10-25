var sound1;
var sound2;
var sound3;
var sound4;
var sound5;


// var sounds= ["sound1","sound2","sound1","sound1","sound1"]


function preload() {
  soundFormats('mp3');
  sound1 = loadSound('sounds/sound1.mp3');
  sound2 = loadSound('sounds/sound12.mp3');
  sound3 = loadSound('sounds/sound3.mp3');
  sound4 = loadSound('sounds/sound4.mp3');
  sound5 = loadSound('sounds/sound5.mp3');
}

function setup(){

}



  
  // nocanvas();

  function keyTyped(){

    if(key == 'a'){
  
  // if(key == "a"){ 
    sound1.play();
    $('#bgcolor').css({
      'background' : 'black'

    });

}
else if  (key == 's'){

sound2.play();
$('#bgcolor').css({
      'background' : '#F21493'

    });

  // }
}


else if  (key == 'd'){

sound3.play();
    $('#bgcolor').css({
      'background' : 'black'

    });
  // }
}

else if  (key == 'f'){

sound4.play();
$('#bgcolor').css({
      'background' : '#F21493'

    });

  // }
}


else if  (key == 'g'){

sound5.play();
    $('#bgcolor').css({
      'background' : 'black'

    });
  // }
}

}

function mousePressed(){

sound1.stop();
sound2.stop();
sound3.stop();
sound4.stop();
sound5.stop();

}









