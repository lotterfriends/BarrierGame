// Hindernisse

function Barrier($board, $barrier) {
	var b = this;
	b.$board = $board;
	b.$barrier = $barrier;
	b.moveLeft = false;
	b.sign = "+";
	b.range = 1;
}

Barrier.prototype.move = function(){
	var b = this;

	// Move left (wieso +20?)
	if (b.nachLinks || (b.$barrier.offset().left + b.$board.position().left >= b.$board.width())) {
		b.sign = "-";
		b.nachLinks = true;
	}

	// Move right
	if (b.$barrier.offset().left <= b.$board.offset().left) {
		b.sign = "+";
		b.nachLinks = false;
	}

	b.$barrier.css("margin-left", b.sign + "=" + b.range + "px");

};