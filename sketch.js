//Create variables here



var firstName,button,greeting;


function setup() {
  //createCanvas(1000, 500);

  firstName = createInput("Name");
  firstName.position(250,150);

  button = createButton("Submit");
  button.position(300,220);
  button.mousePressed(greet);

  greeting = createElement("h1");
  greeting.position(350,100);


  
}

function greet(){
    firstName.hide();
    button.hide();
    var name= firstName.value()

    greeting.html('Hello'+ name + "!");

}


function draw() {
  
  
  
}




