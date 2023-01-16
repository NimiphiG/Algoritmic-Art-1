let x = 0;
let y = 0;
let theta = 0;
let inc = 0.1; // the amount to increment the offset
let offset = 0; // the amount offset from wave start
let amplitude;
let frequency;
let maxAngle;

function setup() {
    amplitude = windowHeight / 8;
    frequency = windowWidth / 8;
    maxAngle = (windowWidth / frequency) * TAU;
  
    createCanvas(windowWidth, windowHeight);
    
}

function draw() {
    background(0);
    noStroke();
    let length = 2;

    while (theta < maxAngle + offset) {
        amplitude = sin(theta-offset)*(windowHeight/10)
        amplitude = ((theta-offset)/maxAngle)* (windowHeight/2)
        //for sine
        for (i= length; i>0; i--){
        y = sin(theta - (i/2)) * amplitude;
        fill(255-(255/length * i),0,60)
        ellipse(x, y + height/2, 10,50);
    
        }

         //for cosine
         for (i= length; i>0; i--){
            x = cos(theta - (i/2)) * amplitude;
            fill(0,255-(255/length * i),60)
            ellipse(x + 500, y + height/2, 200,5);
            }

       theta += 0.2;
       x=((theta - offset)/maxAngle)* windowWidth;
    }
    offset += inc;
    theta = offset;
}
