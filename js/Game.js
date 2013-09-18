$(document).ready(function() {

	$('.game').each(function() {
		new Game($(this));
	});

});


function Game($game) {
	this.$board =  $game.find('.board');
	this.speed = 10;
	this.pause = false;
	this.gameOver = false;
	this.player = new Player(this.$board);
	this.$text = $game.find(".text");
	this.barriers = this.initBarrier();
	this.initKeyListener();
	this.run();
}


Game.prototype.run = function() {
	var game = this;
	var $player = game.player.$player;

	window.setInterval(function() {

		if (game.gameOver || game.pause) {
			return;
		}

		$.each(game.barriers, function(i) {

			this.move();

			if ($player.collidesWith(this.$barrier).length) {
				game.gameOver = true;
				game.$text.text("GAME OVER!");
			}

			if ($player.offset().top > (game.$board.height() + $player.height())){
				game.pause = true;
				game.$text.text("WIN!");
			}

		});

	}, game.speed);
};

Game.prototype.initKeyListener = function() {
	var game = this;
	$(window).bind('keydown', function(e) {
		switch (e.keyCode) {

			// Reset
			case Keys.ESC:
				game.player.reset();
				game.pause = false;
				game.gameOver = false;
				game.$text.text("");
				break;

			// Pause
			case Keys.SPACE:
				game.pause = !game.pause;
				break;

			// Spieler zurücksetzen
			case Keys.POS1:
				if (!game.pause && !game.gameOver) game.player.reset();
				break;

	    	case Keys.LEFT:
	    		if (!game.pause && !game.gameOver) game.player.moveLeft();
	    		break;

	    	case Keys.UP:
	    		if (!game.pause && !game.gameOver) game.player.moveUp();
	    		break;

	    	case Keys.RIGHT:
	    		if (!game.pause && !game.gameOver) game.player.moveRight();
	    		break;

	    	case Keys.DOWN:
	    		if (!game.pause && !game.gameOver) game.player.moveDown();
	    		break;

	    	default:
	    		break;
		}
	});
};

Game.prototype.initBarrier = function() {
	var $board = this.$board;
	var barriers = [];
	$board.find('.barrier').each(function(){
		barriers.push(new Barrier($board, $(this)));
	});
	return barriers;
};




