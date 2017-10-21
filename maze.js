window.onload = function(){
	let wall = document.getElementById("boundary1");
	wall.addEventListener("mouseover",function(){
		wall.setAttribute("class","boundary youlose");
	});
};