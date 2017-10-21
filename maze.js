window.onload = function(){
	let walls = document.querySelectorAll(".boundary");
	let hit_wall = false;
	for(let index = 0; index < walls.length-1; index++){
		walls[index].addEventListener("mouseover",function(){
			walls[index].setAttribute("class","boundary youlose");
			hit_wall = true;
		});
	}
	let maze_game = document.getElementById("maze");
	maze_game.addEventListener("mouseover",function(){
		if(hit_wall === true){
			for(let index = 0; index < walls.length-1; index++){
				walls[index].setAttribute("class","boundary youlose");
			}
		}
	});
	let start_game = document.getElementById("start");
	start_game.addEventListener("mouseover",function(){
		let end_game = document.getElementById("end");
		end_game.addEventListener("mouseover",function(){
			if(hit_wall === false){
				alert("You Win!");
			}
		});
	});
	start_game.addEventListener("click",function(){
		if(hit_wall === true){
			for(let index = 0; index<walls.length-1; index++){
				walls[index].setAttribute("class","boundary");
			}
			hit_wall = false;
		}
	});
};