const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
gettime();
}

function setup()
{
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw()
{
    if (backgroundImg)
    background(backgroundImg);
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function gettime ()
{
var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
var responseJSON = await response.json()
var datetime = responseJSON.datetime
var hour = datetime.slice(11,13)
console.log(hour)
if (hour>=06&&hour<=19)
{
bg="sunrise1.png"
}
else
{
bg="sunset7.png"
}

if (hour>=06&&hour<=19) 
{
bg="sunrise2.png"
}
else
{
bg="sunset8.png"
}

if (hour>=06&&hour<=19) 
{
bg="sunrise3.png"
} 
else 
{
bg="sunset9.png"
}

if (hour>=06&&hour<=19) 
{
bg="sunrise4.png"
}
else
{
bg="sunset10.png"
}

if (hour>=06&&hour<=19) 
{
bg="sunrise5.png"
}
else
{
bg="sunset11.png"
}

if (hour>=06&&hour<=19) 
{
bg="sunrise6.png"
}
else
{
bg="sunset12.png"
}
backgroundImg=loadImage(bg)
}

