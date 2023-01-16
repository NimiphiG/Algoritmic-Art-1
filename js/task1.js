
//how far each frame moves through the waves
let offset = 0;
let inc = 0.03;


// sets number of elipses drawn by the for loop
let length = 10;

// sets the initial fps
let fr = 10;

// sets the starting point for the mouse functions
let clicked = 1;
let growth = 1;

function setup() {

    createCanvas(windowWidth, windowHeight);

    //sets a mid point on the window
    centerX = windowWidth / 2;
    centerY = windowHeight / 2;

}

function draw() {

    frameRate(fr) // sets the frame rate based on mouse listeners 
    background(0); // clear each frame before drawing the next

    //moves the sine wave up by inc for the next frame next frame
    offset += inc;
    theta = offset;

    for (let i = length; i > 0; i--) {

        // draws an elipse with a random x position that scales with cosine, a size that scales with sine and styled acording to loop iteration 
        a = cos(theta);
        x = (random(-centerX, centerX) * a);

        width = 130 * sin(theta) * i;
        height = 100 * (sin(theta)) * i;

        stroke(225 - (255 / length * i), 60, 50, 225);
        strokeWeight(10 * i);
        fill(200, 100, 0, 60);

        ellipse(x + centerX, centerY, width, height);


    }
    //draws an elipse in the center with style and size based on mouse clicked
    stroke(255, 60, 50);
    fill(0, 0, 0, clicked * (35));
    strokeWeight(5 * clicked);

    width = 25 * clicked * clicked;
    height = 25 * clicked * clicked;

    ellipse(centerX, centerY, width, height);
}

window.addEventListener('mousedown', mouseDown)
window.addEventListener('mouseup', mouseUp)

function mouseDown() {
    fr = 0.5;//lower frame rate when mouse is held down

    //increase the value of clicked untill 6 then decrese untill 1
    clicked += growth;
    if (clicked > 5) {
        growth = -1
    };
    if ((clicked == 1) ) {
        growth = 1
    }
}

function mouseUp() {
    fr = 10; //if the mouse is relesed return to 10fps
}







//random movement gets bigger when mouse is further from the center
// amplitude = sin(theta - offset)
        //     // amplitude = ((theta-offset)/maxAngle)* (windowHeight/2)

        //     //for mouse move
        //     for (let i= length; i>0; i--){
        //     y = sin(theta) * (random(mouseY-(windowHeight/2)))+(random(mouseY-(windowHeight/2)))
        //    x = sin(theta) * (random(mouseX-(windowWidth/2)))+(random(mouseX-(windowWidth/2)));
        //     stroke(250-(250/length * i),60,60)
        //     strokeWeight(10)
        //     noFill()
        //     ellipse(x+windowWidth/2, y+windowHeight/2,500,500);
        //     }