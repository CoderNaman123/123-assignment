noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference =0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(350,350);
    video.position(200,200);
    
    canvas= createCanvas(300,300);
    canvas.position(790, 240);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
    

}
function modelLoaded()
{
    console.log("Model is loaded");
}
function gotPoses(results)
{
  if(results.length>0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX + "noseY = " + noseY);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX-rightWristX);
    console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference );

  }}

  function draw()
{
  background('yellow');
  document.getElementById("font_size").innerHTML = "Width and height of a text will be " + difference + " px";
  textSize(difference);
  fill("black");
  text("Naman",noseX , noseY);
  
}