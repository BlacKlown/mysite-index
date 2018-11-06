document.onreadystatechange = function(){
	var main = document.getElementById('main'),
		cover = document.getElementById('cover'),
		loading = document.getElementById('loading');
	
	if (document.readyState == "interactive") {
		loading.style.display = "block";
		loading.style.opacity = 1;
		
	}else if (document.readyState == "complete") {
		myFadeOut();
	}
}
function myFadeOut(){
	if ( (loading.style.opacity -= 0.1) <= 0) {
		loading.style.display = "none";
	}else{
		setTimeout(myFadeOut,100);
	}
}