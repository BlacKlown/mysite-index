window.onload = function(){
	var main = document.getElementById('main'),
		cover = document.getElementById('cover'),
		loading = document.getElementById('loading');
	
	loading.style.display = "block";
	loading.style.opacity = 1;
	myFadeOut();

	cover.onmouseover = function(){
		cover.onmousemove = function(event){
			event = event || window.event;
			var mX = 240 - event.clientX + main.offsetLeft,
				mY = 135 - event.clientY + main.offsetTop;
				rY = "rotateY(" + mX/10 + "deg) ",
				tX = "translateX(" + (-mX/10) + "px) ",
				rX = "rotateX(" + (-mY/10) + "deg)",
				tY = "translateY(" + (-mY/10) + "px)";
			main.style.transform = "";
			main.style.transform += rY;
			main.style.transform += tX;
			main.style.transform += rX;
			main.style.transform += tY;
		}
	}
	cover.onmouseout = function(){
		main.onmousemove = null;
		main.style.transform = "none";
	}
}
function myFadeOut(){
	if ( (loading.style.opacity -= 0.1) <= 0) {
		loading.style.display = "none";
	}else{
		setTimeout(myFadeOut,100);
	}
}