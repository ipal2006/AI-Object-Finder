status="";
find = "";
objects=[]
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
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
}

function modelLoaded()
{
    console.log("Model Is Loaded");
    status=true;
    
}
function gotResult(error,results)
{
if(error)
{
    console.error(error);
}
console.log(results);
objects = results;
}
function start()
{
    dectector_of_object = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
    find = document.getElementById("object_to_find").value
    if(status!="")
    {
      objectDetector.detect(video,gotResult);
      for (i=0;i<objects.length;i++)
      {
        document.getElementById("status").innerHTML = "Status :- Object Detected";
        

        fill("orange");
        percentage = floor(objects[i].confidence*100);
        text(objects[i].label+" "+percentage+" %",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("orange");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        if(objects[i].label == find)
      {
            document.getElementById("dectect").innerHTML = find + " Found";
      }
      }

      
    }
}
function draw()
{ 
    image(video,0,0,650,450);
    
    
}