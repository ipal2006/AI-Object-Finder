status="";
find = "";

function preload()
{
   
}

function setup()
{
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    
}

function modelLoaded()
{
    console.log("Model Is Loaded");
    status=true;
    
}

function start()
{
    dectector_of_object = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
    find = document.getElementById("object_to_find").value
}
function draw()
{ 
    image(video,0,0,650,450);
    
    
}