function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}

img = "";

function preload(){
    img = loadImage('0987654321.jpg');
}

 function draw(){
 image(img, 0, 0, 640, 420);
 fill('#FF0000');
 text('Dog', 45, 75);
 }

