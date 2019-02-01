	// Grid is 10x10 with 40 pixels per grid
	const dim = 400;
	const units = 20; // number of grid squards (10x10)
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
			ctx.strokeRect(this.x, this.y, grid, grid);
			ctx.fillRect(this.x, this.y, grid, grid);
		}

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

			// draw object
			this.draw();
		}

	}

	function clearCanvas() {
		ctx.fillStyle = "white";
		ctx.strokeStyle = "black";

		ctx.fillRect(0,0, dim, dim)
		ctx.strokeRect(0,0, dim, dim)
	}

	function updateScore() {
		scoreboard.innerHTML = theplayer.score;
	}


	// Game Initialization

	const theplayer = new Player(dim/2, dim/2, dim/10, "green");



	function gameUpdate() {
		clearCanvas();
		theplayer.update();
		updateScore();
	}

  window.onload = function() {
    setInterval(gameUpdate, 75); // Kick off the game loop!
    window.onkeydown = function(e) {
      theplayer.direction = {37: -1, 38: -2, 39: 1, 40: 2}[e.keyCode];
    };
  };