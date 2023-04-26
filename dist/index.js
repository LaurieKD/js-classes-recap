class Player {
	#score = 0;
	numLives = 10;
	constructor(first, last) {
		this.first = first;
		this.last = last;
	}
	getScore() {
		return this.#score;
	}
	updateScore(newScore) {
		this.#score = newScore;
	}
	taunt() {
		console.log("Booyah!");
	}
	loseLife() {
		this.numLives -= 1;
	}
}

const player1 = new Player("Pietje", "Puk");
// player1.taunt();
// console.log(player1.first);
// console.log(player1.last);
// console.log(player1);
console.log(player1.numLives);
player1.loseLife();
console.log(player1.numLives);
console.log(player1.getScore());
player1.updateScore(10);
console.log(player1.getScore());

const player2 = new Player("Charlie", "Brown");
player2.taunt();
