	// Grid is 10x10 with 40 pixels per grid
	const dim = 400; // dimension
	const units = 20; // number of grid squards (10x10) ??
	const body_size = units - 2;
	const grid = dim/units;
	// canvas setup
	const canvas = document.getElementById("myCanvas");
	const ctx = canvas.getContext("2d");
	const background = "white";
	let scoreboard = document.getElementById("scoreboard");
	scoreboard.innerText = 0;

	// sleep function
	const sleep = (milliseconds) => {
  		return new Promise(resolve => setTimeout(resolve, milliseconds))
	}

	class Player {
		constructor(init_x, init_y, px_size, color) {
			this.x = init_x;
			this.y = init_y;
			this.body = [[this.x, this.y], [(this.x-20), (this.y - 20)], [(this.x-40), (this.y - 40)]];
			this.body_len = this.body.length;
			this.px_size = px_size;
			this.color = color;
			this.draw();
			this.direction = 1;
			this.score = 0;
			ctx.strokeStyle = "black";
			ctx.fillStyle = this.color;
			// start x, start y, width, height
			ctx.strokeRect(this.x, this.y, grid, grid);
			ctx.fillRect(this.x, this.y, grid, grid);
		}

		draw() {
			ctx.strokeStyle = "black";
			ctx.fillStyle = this.color;
			// this should be a for loop to draw across the list
			var i;
			for (i = 0; i < this.body.length; i++) {
			  	ctx.strokeRect(this.body[i][0], this.body[i][1], grid, grid);
				ctx.fillRect(this.body[i][0], this.body[i][1], grid, grid);
			}
			// ctx.strokeRect(this.x, this.y, grid, grid);
			// ctx.fillRect(this.x, this.y, grid, grid);
		}
		
		collide() {
			var head = this.body[0]; 
			var search_array = this.body;
			search_array = search_array.splice(1, (search_array.length));
			var foundHead = search_array.find(function(element) {
				element[0] == head[0][0];
				element[1] == head [0][1];
			});
			console.log(foundHead);
		}
		
		newCollide() {
			var head = this.body[0];
			var search_array = this.body.slice(1);
			var found = search_array.find(function(element){
				return (element);
			})

			if (found[0] === this.body[0][0]){
				if (found[1] == this.body[0][1]) {
				console.log('collision!!!!');
				this.body = []
				this.body_len = 0
				}
				else console.log('x values same.');
			} 
			else console.log(found, this.body[0]);
		}	

		/*

		// input array contain some elements. 
		var array = [10, 20, 30, 40, 50]; 
		  
		// Here find function returns the value of the first element 
		// in the array that satisfies the provided testing 
		// function (return element > 10). 
		var found = array.find(function(element) { 
		  return element > 20; 
		}); 
		  
		// Printing desired values. 
		console.log(found);
		*/

		

		update() {
			if (this.direction == 1) {
				// moving left to right
				this.x += grid;
				if (this.x >= dim) {
					this.x = 0;
				}
			} else if (this.direction == -1) { 
				// moving right to left
				this.x -= grid;
				if (this.x < 0) {
					this.x = dim - grid;
				}
			} else if (this.direction == -2) { 
				// moving bottom to top
				this.y -= grid;
				if (this.y < 0) {
					this.y = dim - grid;
				}
			} else if (this.direction == 2) {
				// moving top to bottom
				this.y += grid;
				if (this.y >= dim) {
					this.y = 0;
				}
			}
			this.body.unshift([this.x,this.y]); // add new cordinates to array
			if (this.body_len < this.body.length) {
				this.body.pop();
			}
			// draw object
			this.draw();
		}

	}

	class Apple {
		constructor(init_x, init_y, px_size, color) {
			this.x = init_x;
			this.y = init_y;
			this.px_size = px_size;
			this.color = color;
			this.draw();
			ctx.strokeStyle = "black";
			ctx.fillStyle = this.color;
			// start x, start y, width, height
			ctx.strokeRect(this.x, this.y, grid, grid);
			ctx.fillRect(this.x, this.y, grid, grid);
		}
		draw() {
			ctx.strokeStyle = "black";
			ctx.fillStyle = this.color;
			ctx.strokeRect(this.x, this.y, grid, grid);
			ctx.fillRect(this.x, this.y, grid, grid);
		}

		update() {
			this.draw();
		}
	}

	function clearCanvas() {
		ctx.fillStyle = "white";
		ctx.strokeStyle = "black";
		ctx.fillRect(0,0, dim, dim)
		ctx.strokeRect(0,0, dim, dim)
	}

	function updateScore(player, apple) {
		if (player.x == apple.x && player.y == apple.y){
				player.score += 1;
				player.body_len += 1;
				random_x = Math.floor(Math.random() * 10) * 20; // new x cord int 0-9 * 20
				random_y = Math.floor(Math.random() * 10) * 20; // new y cord 
				apple.x = random_x;
				apple.y = random_y;
		}
		else {
			apple.update();
		}

		scoreboard.innerHTML = theplayer.score;
	}


	// Game Initialization

	const theplayer = new Player(dim/2, dim/2, dim/10, "green");
	const theapple = new Apple(dim/4, dim/4, dim/10, "red");



	function gameUpdate() {
		clearCanvas();
		theplayer.newCollide();
		updateScore(theplayer, theapple);
		theplayer.update();
	}

  window.onload = function() {
    setInterval(gameUpdate, 75); // Kick off the game loop!
    window.onkeydown = function(e) {
      theplayer.direction = {37: -1, 38: -2, 39: 1, 40: 2}[e.keyCode];
    };
  };