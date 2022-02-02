x=0;
y=0;
draw_shape=0;

var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="System is listening, please speak";
    recognition.start();
    
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;

    document.getElementById("status").innerHTML="The speech has been recognized as "+content;

    if (content=="circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Start Drawing Circle";
        draw_shape="circle";
    }
    else if(content=="rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Start Drawing Rectangle";
        draw_shape="rect";
    }
    else if(content=="square"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Start Drawing Square";
        draw_shape="sq";
        console.log(draw_shape);
    }
    else if(content=="Triangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Start Drawing Triangle";
        draw_shape="tri";
    }
}

function setup(){
    createCanvas(800,580);
}
function draw(){
    if(draw_shape=="circle"){
        radius=Math.floor(Math.random()*200);
        noStroke();
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Circle is drawn";
        draw_shape="";
    }
    else if(draw_shape=="rect"){
        height=Math.floor(Math.random()*400);
        width=Math.floor(Math.random()*400);
        noStroke();
        rect(x,y,width,height);
        document.getElementById("status").innerHTML="Rectangle is drawn";
        draw_shape="";
    }
    else if(draw_shape=="sq"){
        measure=Math.floor(Math.random()*400);
        noStroke();
        square(x,y,measure);
        document.getElementById("status").innerHTML="Square is drawn";
        draw_shape="";
    }
    else if(draw_shape=="tri"){
        x2=Math.floor(Math.random()*100);
        y2=Math.floor(Math.random()*100);
        x3=Math.floor(Math.random()*100);
        y3=Math.floor(Math.random()*100);
        noStroke();
        triangle(x,y,x2,y2,x3,y3);
        document.getElementById("status").innerHTML="Triangle is drawn";
        draw_shape="";
    }
}