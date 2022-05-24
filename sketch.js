var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,
m11,m12,m13,m14,m15,m16,m17,m19,m20,
m21,m22,m23,m24,m25,m26,m27,m28,m29,m30,
m31,m32,m33,m34,m35,m36,m37,m38,m39,m40,
m41,m42,m43,m44,m45,m46,m47,m48,m49,m50,
m51;
var bg;
var canvas;

function preload(){

  bg = loadImage("./assets/bg.jpg")

}

function setup(){
  canvas = createCanvas(800,500)

  m1 = createSprite(31,242,10,400)
  m1.shapeColor = "white"

  m2 = createSprite(328,39,600,10)
  m2.shapeColor = "white"

  m3 = createSprite(470,445,600,10)
  m3.shapeColor = "white"

  m4 = createSprite(770,250,10,400)
  m4.shapeColor = "white"

  m5 = createSprite(156,325,80,10)
  m5.shapeColor = "white"
  
  m6 = createSprite(200,345,10,50)
  m6.shapeColor = "white"

  m7 = createSprite(160,368,90,10)
  m7.shapeColor = "white"

  m8 = createSprite(90,241,110,10)
  m8.shapeColor = "white"

  m9 = createSprite(76,90,100,10)
  m9.shapeColor = "white"

  m10 = createSprite(126,110,10,52)
  m10.shapeColor = "white"

  m11 = createSprite(145,139,50,10)
  m11.shapeColor = "white"

  m12 = createSprite(164,160,10,50)
  m12.shapeColor = "white"

  m13 = createSprite(290,69,10,70)
  m13.shapeColor = "white"

  m14 = createSprite(310,105,50,10)
  m14.shapeColor = "white"

  m15 = createSprite(339,135,10,70)
  m15.shapeColor = "white"

  m16 = createSprite(217,110,10,50)
  m16.shapeColor = "white"

  m17 = createSprite(236,137,50,10)
  m17.shapeColor = "white"

  m18 = createSprite(266,182,10,100)
  m18.shapeColor = "white"
  
  m19 = createSprite(320,226,100,10)
  m19.shapeColor = "white"

  m20 = createSprite(264,358,10,80)
  m20.shapeColor = "white"

  m21 = createSprite(481,80,10,80)
  m21.shapeColor = "white"

  m22 = createSprite(544,415,10,50)
  m22.shapeColor = "white"

  m23 = createSprite(504,390,90,10)
  m23.shapeColor = "white"

  m24 = createSprite(690,399,10,80)
  m24.shapeColor = "white"

  m25 = createSprite(725,271,80,10)
  m25.shapeColor = "white"

  m26 = createSprite(490,120,100,10)
  m26.shapeColor = "white"

  m27 = createSprite(375,225,10,80)
  m27.shapeColor = "white"

  m28 = createSprite(490,236,80,10)
  m28.shapeColor = "white"

  m29 = createSprite(446,233,10,80)
  m29.shapeColor = "white"

  m30 = createSprite(344,358,10,80)
  m30.shapeColor = "white"

  m31 = createSprite(365,315,50,10)
  m31.shapeColor = "white"

  m32 = createSprite(389,335,10,50)
  m32.shapeColor = "white"

  m33 = createSprite(728,116,80,10)
  m33.shapeColor = "white"

  m34 = createSprite(689,152,10,80)
  m34.shapeColor = "white"

  m35 = createSprite(669,189,50,10)
  m35.shapeColor = "white"

  m36 = createSprite(590,345,10,210)
  m36.shapeColor = "white"

  m37 = createSprite(555,236,80,10)
  m37.shapeColor = "white"

  m38 = createSprite(300,393,80,10)
  m38.shapeColor = "white"

  m39 = createSprite(208,253,10,50)
  m39.shapeColor = "white"

  m40 = createSprite(208,231,50,10)
  m40.shapeColor = "white"

  m41 = createSprite(305,417,10,50)
  m41.shapeColor = "white"

  m42 = createSprite(232,325,60,10)
  m42.shapeColor = "white"

  m43 = createSprite(495,155,80,10)
  m43.shapeColor = "white"

  m44 = createSprite(535,160,10,70)
  m44.shapeColor = "white"

  m45 = createSprite(584,79,10,90)
  m45.shapeColor = "white"

  m46 = createSprite(649,145,10,80)
  m46.shapeColor = "white"

  m47 = createSprite(630,313,80,10)
  m47.shapeColor = "white"

  m48 = createSprite(254,90,80,10)
  m48.shapeColor = "white"

  m49 = createSprite(508,302,80,10)
  m49.shapeColor = "white"

  m50 = createSprite(214,445,200,10)
  m50.shapeColor = "white"

  m51 = createSprite(665,39,90,10)
  m51.shapeColor = "white"
  
}

function draw(){
background(bg)
console.log(mouseX,mouseY)

drawSprites()
}