img="";
rightwristX=0;
rightwristY=0;
marioX=325;
marioY=325;
game_status = "";
function preload() {
	img="mario24.png";
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas');

	createCanvas(650, 400);
	video = createCapture(VIDEO);
	video.size(600, 300);

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function draw() {
		game();
		background("#D3D3D3");
		if(game_status == "start" ){
			
		}
	image(img,marioX,marioY,40,70);
	
}

function modelLoaded() {
	console.log('Model Loaded :)');
}
function gotPoses(results) {
	if (results.length > 0) {
		console.log(results);
		rightwristX = results[0].pose.rightwrist.x;
		rightwristY = results[0].pose.rightwrist.y;
	}
}
function startgame(){
	game_status = "start"
	document.getElementById("status").innerHTML = "Game Is Loaded";
}