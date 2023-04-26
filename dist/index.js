class Player {
	static description = "Player in the game";
	#score = 0;
	numLives = 10;
	constructor(first, last) {
		this.first = first;
		this.last = last;
	}

	get fullName() {
		return `${this.first} ${this.last}`;
	}

	get score() {
		return this.#score;
	}

	set score(newScore) {
		if (newScore < 0) {
			throw new Error("Lowest possible score is zero");
		}
		this.#score = newScore;
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

class AdminPlayer extends Player {
	constructor(first, last, privileges) {
		super(first, last);
		this.privileges = privileges;
	}
	isAdmin = true;
}
const admin = new AdminPlayer("John", "Adminson", ["delete players", "add players", "create new world"]);

// const player1 = new Player("Pietje", "Puk");
// // player1.taunt();
// // console.log(player1.first);
// // console.log(player1.last);
// // console.log(player1);
// console.log(player1.numLives);
// player1.loseLife();
// console.log(player1.numLives);
// console.log(player1.getScore());
// player1.updateScore(10);
// console.log(player1.getScore());
// console.log(player1.fullName);
// console.log(player1.score);
// player1.score = 345;

// const player2 = new Player("Charlie", "Brown");
// player2.taunt();
