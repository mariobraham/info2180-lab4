window.onload = function(){
	let walls = document.querySelectorAll(".boundary");
	let hit_wall = false;
	let win = false;
	for(let index = 0; index < walls.length-1; index++){
		walls[index].addEventListener("mouseover",function(){
			walls[index].setAttribute("class","boundary youlose");
			hit_wall = true;
		});
	}
	let start_game = document.getElementById("start");
	start_game.addEventListener("mouseover",function(){
		let end_game = document.getElementById("end");
		end_game.addEventListener("mouseover",function(){
			if(hit_wall === false){
				let game_status= document.getElementById("status");
				if(game_status.innerHTML.search(" You Win!") === -1 && game_status.innerHTML.search(" You Lose!") === -1){
					game_status.innerHTML = game_status.innerHTML + " You Win!";
					win = true;
				}
			}
			else{
				let game_status = document.getElementById("status");
				if(game_status.innerHTML.search(" You Win!") === -1 && game_status.innerHTML.search(" You Lose!") === -1){
					game_status.innerHTML = game_status.innerHTML + " You Lose!";
				}
			}
		});
	});
	start_game.addEventListener("click",function(){
		for(let index = 0; index<walls.length-1; index++){
				walls[index].setAttribute("class","boundary");
			}
		if(win === false){
			let game_status = document.getElementById("status");
			let text_index = game_status.innerHTML.search(" You Lose!");
			if(text_index !== -1){
				game_status.innerHTML = game_status.innerHTML.slice(0,text_index);
			}
		}
		else{
			let game_status = document.getElementById("status");
			let text_index = game_status.innerHTML.search(" You Win!");
			if(text_index !== -1){
				game_status.innerHTML = game_status.innerHTML.slice(0,text_index);
			}
		}
		hit_wall = false;
		win = false;
	});
	let maze_game = document.getElementById("maze");
	maze_game.addEventListener("mouseover",function(){
		if(hit_wall === true){
			for(let index = 0; index < walls.length-1; index++){
				walls[index].setAttribute("class","boundary youlose");
			}
		}
	});
};