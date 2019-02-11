var img1 = document.getElementsByClassName("img")[0],
    img2 = document.getElementsByClassName("img")[1],
    img3 = document.getElementsByClassName("img")[2];
var pic11 = document.getElementsByClassName("pic1")[0],
    pic12 = document.getElementsByClassName("pic1")[1],
    pic13 = document.getElementsByClassName("pic1")[2],
    pic14 = document.getElementsByClassName("pic1")[3],
    pic15 = document.getElementsByClassName("pic1")[4],
    pic16 = document.getElementsByClassName("pic1")[5],
    pic17 = document.getElementsByClassName("pic1")[6];
var pic21 = document.getElementsByClassName("pic2")[0],
    pic22 = document.getElementsByClassName("pic2")[1],
    pic23 = document.getElementsByClassName("pic2")[2],
    pic24 = document.getElementsByClassName("pic2")[3],
    pic25 = document.getElementsByClassName("pic2")[4],
    pic26 = document.getElementsByClassName("pic2")[5],
    pic27 = document.getElementsByClassName("pic2")[6];
var pic31 = document.getElementsByClassName("pic3")[0],
    pic32 = document.getElementsByClassName("pic3")[1],
    pic33 = document.getElementsByClassName("pic3")[2],
    pic34 = document.getElementsByClassName("pic3")[3],
    pic35 = document.getElementsByClassName("pic3")[4],
    pic36 = document.getElementsByClassName("pic3")[5],
    pic37 = document.getElementsByClassName("pic3")[6];

var btn = document.getElementById("switch");

var timer1,
    timer2,
    timer3;
var count1 = 0,
    count2 = 0,
    count3 = 0;
var n1 = null,
    n2 = null,
    n3 = null;
var i = null,
    j = null,
    k = null;

var sym = 1;

var pause1,
    pause2,
    pause3;



function roll1 (){
	timer1 = setInterval(function (){
		img1.style.top = parseInt(img1.style.top)-8 + "px";
		count1 += 1;
		if(count1 >=25){
			clearInterval(timer1);
    	    count1 = 0;
    	    img1.style.top = parseInt(img1.style.top)-4 + "px";
		}
	},5)
}

function roll2 (){
	timer2 = setInterval(function (){
		img2.style.top = parseInt(img2.style.top)-8 + "px";
		count2 += 1;
		if(count2 >=25){
			clearInterval(timer2);
    	    count2 = 0;
    	    img2.style.top = parseInt(img2.style.top)-4 + "px";
		}
	},5)
}

function roll3 (){
	timer3 = setInterval(function (){
		img3.style.top = parseInt(img3.style.top)-8 + "px";
		count3 += 1;
		if(count3 >=25){
			clearInterval(timer3);
    	    count3 = 0;
    	    img3.style.top = parseInt(img3.style.top)-4 + "px";
		}
	},5)
}

function play1(){
	roll1();
	random();
 	if(n1==4){
 		img1.style.top = -100+"px";
 		n1 = 0;
 	    }
 	n1+=1;
 	if(n1==1){
 		setTimeout(function(){
 			pic11.src='gamelogo/'+i+'.jpg';
 		    pic15.src='gamelogo/'+i+'.jpg';
 		},200);
 	}
 	if(n1==2){
 		setTimeout(function(){
 			pic12.src='gamelogo/'+i+'.jpg';
 		    pic16.src='gamelogo/'+i+'.jpg';
 		},200);
 	}
 	if(n1==3){
 		setTimeout(function(){
 			pic13.src='gamelogo/'+i+'.jpg';
 		    pic17.src='gamelogo/'+i+'.jpg';
 		},200)
 	}
 	if(n1==4){
 		setTimeout(function(){
 			pic14.src='gamelogo/'+i+'.jpg';
 		},200)
 	}
}

function play2(){
	roll2();
	random();
 	if(n2==4){
 		img2.style.top = -100+"px";
 		n2 = 0;
 	    }
 	n2+=1;
 	if(n2==1){
 		setTimeout(function(){
 			pic21.src='gamelogo/'+j+'.jpg';
 		    pic25.src='gamelogo/'+j+'.jpg';
 		},200);
 	}
 	if(n2==2){
 		setTimeout(function(){
 			pic22.src='gamelogo/'+j+'.jpg';
 		    pic26.src='gamelogo/'+j+'.jpg';
 		},200);
 	}
 	if(n2==3){
 		setTimeout(function(){
 			pic23.src='gamelogo/'+j+'.jpg';
 		    pic27.src='gamelogo/'+j+'.jpg';
 		},200)
 	}
 	if(n2==4){
 		setTimeout(function(){
 			pic24.src='gamelogo/'+j+'.jpg';
 		},200)
 	}
}

function play3(){
	roll3();
	random();
 	if(n3==4){
 		img3.style.top = -100+"px";
 		n3 = 0;
 	    }
 	n3+=1;
 	if(n3==1){
 		setTimeout(function(){
 			pic31.src='gamelogo/'+k+'.jpg';
 		    pic35.src='gamelogo/'+k+'.jpg';
 		},200);
 	}
 	if(n3==2){
 		setTimeout(function(){
 			pic32.src='gamelogo/'+k+'.jpg';
 		    pic36.src='gamelogo/'+k+'.jpg';
 		},200);
 	}
 	if(n3==3){
 		setTimeout(function(){
 			pic33.src='gamelogo/'+k+'.jpg';
 		    pic37.src='gamelogo/'+k+'.jpg';
 		},200)
 	}
 	if(n3==4){
 		setTimeout(function(){
 			pic34.src='gamelogo/'+k+'.jpg';
 		},200)
 	}
}



function random(){
	i = Math.round(Math.random()*9);
	j = Math.round(Math.random()*9);
	k = Math.round(Math.random()*9);
}
// function random2(){
// 	i2 = Math.round(Math.random()*9);
// 	j2 = Math.round(Math.random()*9);
// 	k2 = Math.round(Math.random()*9);
// }
// function random3(){
// 	i3 = Math.round(Math.random()*9);
// 	j3 = Math.round(Math.random()*9);
// 	k3 = Math.round(Math.random()*9);
// }

function doPause1(){
	clearInterval(pause1);
}

function stop1(){
	setTimeout(doPause1,130);
}

function doPause2(){
	clearInterval(pause2);
}

function stop2(){
	setTimeout(doPause2,125);
}

function doPause3(){
	clearInterval(pause3);
}

function stop3(){
	setTimeout(doPause3,125);
}



function start(){
	setTimeout(function(){
		pause1 = setInterval(play1,150)
	},50);
	setTimeout(function(){
		pause2 = setInterval(play2,150);
	},250);
	setTimeout(function(){
		pause3 = setInterval(play3,150);
	},450);
}

function shutDown(){
	setTimeout(doPause1,50);
	setTimeout(doPause2,350);
	setTimeout(doPause3,650);
}

function doSwitch(){
	if(sym === 1){
		start();
		sym = 0;
	}
	else if(sym === 0){
		shutDown();
		sym = 1;
	}
}

btn.addEventListener("click",function(){
	doSwitch();
},false);
