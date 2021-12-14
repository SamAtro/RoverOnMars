canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
backround_image="mars.jpg";
rover_image="rover_png";
rover_x=10;
rover_y=10;
function add(){
    backround_imagetag=new Image();
    backround_imagetag.onload=uploadBackround;
    backround_imagetag.src=backround_image;
    rover_imagetag=new Image();
    rover_imagetag.onload=uploadrover;
    rover_imagetag.src=rover_image;
}
function uploadBackround(){
    ctx.drawImage(backround_imagetag, 0,0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imagetag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up();
        console.log("up");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }    if(keyPressed=='37'){
        left();
        console.log("left");
    }    if(keyPressed=='39'){
        right();
        console.log("right");
    }
}