var myData;
var img1;
var img2;
var img3;
var planets = [];
var myImageList;
var ii;


function preload() {
  myData = loadJSON('assets/peopleinspace.json');
  img1 = loadImage("./assets/image1.jpg");
  img2 = loadImage("./assets/image2.jpg");
  img3 = loadImage("./assets/image3.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(96,146,195);

  for (var i = 0; i < myData.people.length; i++) {
    var plnName = myData.people[i];
    var newPln = new myObject(plnName.name);
    planets.push(newPln);
  }

  ii = 0;

  myImageList = [
    img1,
    img2,
    img3,
  ];

  planets[0].display();
  image(myImageList[0], width/2-75, height/2-113);
}

function draw() {
}

function myObject(name) {
  this.name = name;
  this.display = function() {
    fill("white");
    textFont('PT Sans',40);
    textAlign(CENTER);
    text(this.name, width/2, height/2+170);
  }

}

function mouseClicked() {
  background(96,146,195);

  if (ii < planets.length - 1) {
    ii = ii + 1;
    planets[ii].display();
    image(myImageList[ii], width/2-75, height/2-113);
  } else {
    ii = 0;
    planets[ii].display();
    image(myImageList[ii], width/2-75, height/2-113);
  }
}
