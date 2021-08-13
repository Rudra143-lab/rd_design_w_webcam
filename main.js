 function setup() {
     video = createCapture(VIDEO);
     video.position(500,200);
     video.size(560,510);

     canvas = createCanvas(560, 510);
     canvas.position(500,200);

     pose=ml5.poseNet(video, model_loaded);
     pose.on('pose', got_result);
 }

 function model_loaded() {
     console.log("PoseNet is Loaded");
 }

 function got_result(results){
     if(results.length>0){
         console.log(results);
     }

 }

 function draw(){
     background(video);
 }