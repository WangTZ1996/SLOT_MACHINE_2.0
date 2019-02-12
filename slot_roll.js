
// slot_roll.js
// 这个版本的JS文件相比之前的版本优化了dom操作
// 目前还存在一些不足，就是代码耦合度太高，重复操作太多，下一步尽量精简优化代码更精确抽离功能代码，实现复用。

// DOM操作，获取DOM对象
/*
 * img 是滚动长图的集合，数组类型里面保存了三个对象对应三排滚动框图

 * pic 是长图元素中每一个图片的集合，对应图片框每一位

 * btn 是按钮元素

 */
var img = document.getElementsByClassName("img");
var pic1 = document.getElementsByClassName("pic1");
var pic2 = document.getElementsByClassName("pic2");
var pic3 = document.getElementsByClassName("pic3");
var btn = document.getElementById("switch");

// 定义全局变量
/*
 * timer是roll函数的定时器标志变量，用于停止roll函数
 
 * pause是start函数的定时器标志变量，用于停止start函数
 
 * count是roll函数的计数器用于确定roll函数执行的步长
 
 * n是play函数的计数器用于确定play函数在一个周期中执行到第几次，从而确定插入随机图片的位置
 
 * i、j、k 分别是三组图片的随机数变量
 
 * sym是switch函数的标志位，其值为0或1，用于确定按钮所处的状态
 * 
 */
var timer1,
    timer2,
    timer3;
var pause1,
    pause2,
    pause3;
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

// 滚动函数，定义每一张图的切换动画
function roll1 (){
	clearInterval(timer1);
	timer1 = setInterval(function (){
		img[0].style.top = parseInt(img[0].style.top)-8 + "px";
		count1 += 1;
		if(count1 >=25){
			clearInterval(timer1);
    	    count1 = 0;
    	    img[0].style.top = parseInt(img[0].style.top)-4 + "px";
		}
	},5)
}

function roll2 (){
	clearInterval(timer2);
	timer2 = setInterval(function (){
		img[1].style.top = parseInt(img[1].style.top)-8 + "px";
		count2 += 1;
		if(count2 >=25){
			clearInterval(timer2);
    	    count2 = 0;
    	    img[1].style.top = parseInt(img[1].style.top)-4 + "px";
		}
	},5)
}

function roll3 (){
	clearInterval(timer3);
	timer3 = setInterval(function (){
		img[2].style.top = parseInt(img[2].style.top)-8 + "px";
		count3 += 1;
		if(count3 >=25){
			clearInterval(timer3);
    	    count3 = 0;
    	    img[2].style.top = parseInt(img[2].style.top)-4 + "px";
		}
	},5)
}
// 将生成的随机数插入到DOM对象的src属性中，实现随机图片生成
function play1(){
	roll1();
	random();
 	if(n1==4){
 		img[0].style.top = -100+"px";
 		n1 = 0;
 	    }
 	n1+=1;
 	if(n1==1){
 		setTimeout(function(){
 			pic1[0].src='gamelogo/'+i+'.jpg';
 		    pic1[4].src='gamelogo/'+i+'.jpg';
 		},125);
 	}
 	if(n1==2){
 		setTimeout(function(){
 			pic1[1].src='gamelogo/'+i+'.jpg';
 		    pic1[5].src='gamelogo/'+i+'.jpg';
 		},125);
 	}
 	if(n1==3){
 		setTimeout(function(){
 			pic1[2].src='gamelogo/'+i+'.jpg';
 		    pic1[6].src='gamelogo/'+i+'.jpg';
 		},125)
 	}
 	if(n1==4){
 		setTimeout(function(){
 			pic1[3].src='gamelogo/'+i+'.jpg';
 		},125)
 	}
}

function play2(){
	roll2();
	random();
 	if(n2==4){
 		img[1].style.top = -100+"px";
 		n2 = 0;
 	    }
 	n2+=1;
 	if(n2==1){
 		setTimeout(function(){
 			pic2[0].src='gamelogo/'+j+'.jpg';
 		    pic2[4].src='gamelogo/'+j+'.jpg';
 		},125);
 	}
 	if(n2==2){
 		setTimeout(function(){
 			pic2[1].src='gamelogo/'+j+'.jpg';
 		    pic2[5].src='gamelogo/'+j+'.jpg';
 		},125);
 	}
 	if(n2==3){
 		setTimeout(function(){
 			pic2[2].src='gamelogo/'+j+'.jpg';
 		    pic2[6].src='gamelogo/'+j+'.jpg';
 		},125)
 	}
 	if(n2==4){
 		setTimeout(function(){
 			pic2[3].src='gamelogo/'+j+'.jpg';
 		},125)
 	}
}

function play3(){
	roll3();
	random();
 	if(n3==4){
 		img[2].style.top = -100+"px";
 		n3 = 0;
 	    }
 	n3+=1;
 	if(n3==1){
 		setTimeout(function(){
 			pic3[0].src='gamelogo/'+k+'.jpg';
 		    pic3[4].src='gamelogo/'+k+'.jpg';
 		},125);
 	}
 	if(n3==2){
 		setTimeout(function(){
 			pic3[1].src='gamelogo/'+k+'.jpg';
 		    pic3[5].src='gamelogo/'+k+'.jpg';
 		},125);
 	}
 	if(n3==3){
 		setTimeout(function(){
 			pic3[2].src='gamelogo/'+k+'.jpg';
 		    pic3[6].src='gamelogo/'+k+'.jpg';
 		},125)
 	}
 	if(n3==4){
 		setTimeout(function(){
 			pic3[3].src='gamelogo/'+k+'.jpg';
 		},125)
 	}
}
// 生成0~10之间的随机数
function random(){
	i = Math.round(Math.random()*9);
	j = Math.round(Math.random()*9);
	k = Math.round(Math.random()*9);
}

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
// start函数为开始程序，执行该函数实现三栏图片随机滚动
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
// shutDown函数为结束程序，执行该函数使三栏图片停止滚动定格依次定格在中间框
function shutDown(){
	setTimeout(doPause1,50);
	setTimeout(doPause2,350);
	setTimeout(doPause3,650);
}
// switch函数实现一键复用功能，既简化了操作，又可以避免连续执行同一函数造成的错误
function doSwitch(){
	if(sym === 1){
		start();
		sym = 0;
		// clearInterval(auto);
	}
	else if(sym === 0){
		shutDown();
		sym = 1;
		// clearInterval(auto);
		// setInterval(doSwitch,1500);
	}
}
// 防抖函数，避免连续短时间内点击按钮，避免连续点击按钮造成的错误
function throttle(method,context){
            clearTimeout(method.tId);
            method.tId=setTimeout(function(){
                method.call(context);
            },300);
            // clearInterval(auto);
        }
// 事件绑定，在btn元素上绑定click事件，执行switch函数
btn.addEventListener("click",function(){
	throttle(doSwitch);
},false);
