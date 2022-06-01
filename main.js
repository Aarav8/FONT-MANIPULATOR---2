function setup() 
{
    canvas=createCanvas(600,550);
    canvas.position(750,100);

    video=createCapture(VIDEO);
    video.position(100,90);
    video.size(600,600);

    posenet=ml5.poseNet(video,modelLoaded());
    posenet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("model loaded");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
    }
}
function draw()
{
    background("#808080");
}
