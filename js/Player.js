// Spieler

function Player($board) {
	var p = this;
	p.speed = 5;
	p.$board = $board;
	p.$player = p.$board.find('.player:eq(0)');
}

Player.prototype.reset = function() {	
	this.$player.css("margin","0");
};

Player.prototype.moveUp = function() {
	var p = this;
	if (p.$player.offset().top > p.$board.offset().top) {
		p.$player.css("margin-top","-=" + p.speed + "px");
	}
};

Player.prototype.moveDown = function() {
	var p = this;
	if (p.$player.offset().top < (p.$board.height() + p.$player.height())) {
		p.$player.css("margin-top","+=" + p.speed + "px");
	}
};

Player.prototype.moveLeft = function() {
	var p = this;
	if (p.$player.offset().left > p.$board.offset().left) {
		p.$player.css("margin-left","-=" + p.speed + "px");
	}
};

Player.prototype.moveRight = function() {
	var p = this;
	if (p.$player.offset().left - p.speed < p.$board.width()) { 
		p.$player.css("margin-left","+=" + p.speed + "px");
	}
};
