function preload(){}

function setup(){
canvas= createCanvas(640,480)
canvas.position(450,230)
video = createCapture(VIDEO)
video.hide();

tint_color="";
}

function draw(){
    image(video,50,50,500,390);
    tint(tint_color);
    
    rect(90,40,460,20);

rect(90,420,460,20);

rect(90,420,460,20);

rect(40,90,20,300);

rect(540,90,20,300);
    
    
    fill(1000,250,0);
    stroke(255,0,0);
    circle(50,50,80)


fill(1000,250,0);
stroke(255,0,0);
circle(550,50,80)


fill(1000,250,0);
stroke(255,0,0)
circle(50,430,80)

fill(1000,250,0);
stroke(255,0,0)
circle(50,430,80)


fill(1000,250,0);
stroke(255,0,0)
circle(550,430,80)




}

function take_snapshot(){
    save('filter_color.png')
    }
    
    function Filter_tint(){
    tint_color = document.getElementById("color_name").value;
    }