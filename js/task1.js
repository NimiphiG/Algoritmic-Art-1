
// set global variables
let x ;
let y ;
let theta ;
let maxAngle;
let a;
let clicked = 1;
let growth = 1

//how far each frame moves through the waves
let inc = 0.03; 
let offset = 0; 

let length = 10; // sets number of elipses drawn by the for loop
let fr = 10; // sets the initial fps



function setup() {

    maxAngle = (0.05) * TAU; //sets a limit of the sin wave

    createCanvas(windowWidth, windowHeight);

    //sets a mid point on the window
    centerX = windowWidth / 2;
    centerY = windowHeight / 2;

    window.addEventListener('mousedown', mouseDown) //lower frame rate when mouse is held down
    function mouseDown() {
        fr = 0.5;
        

        //increase the value of clicked untill 6 then decrese untill 1
        clicked += growth;
        if (clicked > 5) {
            growth = -1
        };
        if ((clicked == 1) && (growth == -1)) {
            growth = 1
        }
    }
    window.addEventListener('mouseup', mouseUp)
    function mouseUp() {
        fr = 10 //if the mouse is relesed return to 10fps
    }
}

function draw() {

    background(0); // clear each frame before drawing the next
    frameRate(fr) // sets the frame rate based on mouse listeners 

    //moves the sine wave up by inc for the next frame next frame
    offset += inc;
    theta = offset;

    while (theta < maxAngle + offset) { //makes sure each frame only runs through the for loop once

        for (let i = length; i > 0; i--) {

            // draws an elipse with a random x position that scales with cosine, a size that scales with sine and styled acording to loop iteration 
            a = cos(theta)
            x = (random(-400, 400) * a) + (random(-400, 400) * a);
            stroke(225 - (255 / length * i), 60, 50, 225);
            strokeWeight(10 * i);
            fill(200, 100, 0, 60);
            ellipse((x) + centerX, centerY, sin(theta) * 400 * (i / 3), (sin(theta)) * 300 * (i / 3));

            //draws an elipse in the center with style and size based on mouse clicked
            strokeWeight(5 * clicked );
            stroke(199.5, 60, 50);
            fill(0, 0, 0, clicked * clicked * (255 / 80));
            ellipse(centerX, centerY, 25 * clicked * clicked, 25 * clicked * clicked);
        }

        theta += 1; //ends the while loop for this frame

    }

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