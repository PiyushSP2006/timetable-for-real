var Sun=["PHYS","CHEM","BIO","MATHS","HIST"];
var Mon=["MATHS","GEO","HIST","PHYS"];
var Tue=["CHEM","PED","GEO","BIO"];
var Wed=["CHEM","PED","ENG","BIO"];
var Thurs=["CHEM","PHY","HIST","GEO"];
var Fri=["ODIA","ENG","MATHS","BIO"];
var Sat=["PHY","BIO","CHEM","GEO"];
var day=[0,1,2,3,4,5,6];
var title="TIME TABLE"
var DAY;
var backgroundImg;

function preload(){
  backgroundImg=loadImage("bg.jpg")
}


function setup() {
  createCanvas(1200,900);
  
}

function draw() {
  background(backgroundImg);
  fill("yellow")  
  textSize(38);
  text(title,1200/3,100)
  fill("pink"); 
  text("Monday: "+Mon,1200/4,200)

  fill("yellow")
  text("Tuesday: "+Tue,1200/4,300)
  text("Wednesday: "+Wed,1200/4,400)

  fill("blue")
  text("Thursday: "+Thurs,1200/4,500)
  text("Friday: "+Fri,1200/4,600)

  fill("red")
  text("Saturday: "+Sat,1200/4,700)
  text("Sunday: "+Sun,1200/4,800)
  drawSprites();
}