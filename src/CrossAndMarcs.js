import { PLAYFIELD_COLUMNS, PLAYFIELD_ROWS } from "./variables";

export class CAM {
	constructor() {
		this.playground;
		this.init();
		this.player = 1;
		this.gameOver = false;
		this.cells;
		this.playerWinner;
	}

	init() {
		this.generatePlayField();
		this.onClick = this.onClick.bind(this);
		this.checkDiagonal = this.checkDiagonal.bind(this);
		this.checkForThree = this.checkForThree.bind(this);
	}

	generatePlayField() {
		this.playground = new Array(PLAYFIELD_ROWS).fill()
			.map(() => new Array(PLAYFIELD_COLUMNS).fill(0))
	}

	onClick(e) {
		switch (e.target.classList.value) {
			case '1':
				this.playground[0][0] = this.player;
				this.getRotatePlayer();
				this.checkForThree();
				break;
			case '2':
				this.playground[0][1] = this.player;
				this.getRotatePlayer();
				this.checkForThree();
				break;
			case '3':
				this.playground[0][2] = this.player;
				this.getRotatePlayer();
				this.checkForThree();
				break;
			case '4':
				this.playground[1][0] = this.player;
				this.getRotatePlayer();
				this.checkForThree();
				break;
			case '5':
				this.playground[1][1] = this.player;
				this.getRotatePlayer();
				this.checkForThree();
				break;
			case '6':
				this.playground[1][2] = this.player;
				this.getRotatePlayer();
				this.checkForThree();
				break;
			case '7':
				this.playground[2][0] = this.player;
				this.getRotatePlayer();
				this.checkForThree();
				break;
			case '8':
				this.playground[2][1] = this.player;
				this.getRotatePlayer();
				this.checkForThree();
				break;
			case '9':
				this.playground[2][2] = this.player;
				this.getRotatePlayer();
				this.checkForThree();
				break;

			default:
				console.log('ошибка ввода');
				break;
		}
	}

	getRotatePlayer() {
		if (this.player === 1) {
			this.player = 2;
		} else {
			this.player = 1;
		}
		
	}

	checkForThree() {
		localStorage.setItem('map',JSON.stringify(this.playground));
		localStorage.setItem('player',JSON.stringify(this.player));
		for (let row = 0; row < PLAYFIELD_ROWS; row++) {
			let first = 0;
			let second = 0;
			if (this.playground[row].every(cell => cell == 1)) {
				this.gameOver = true;

			}
			if (this.playground[row].every(cell => cell == 2)) {
				this.gameOver = true;

			}
			for (let col = 0; col < PLAYFIELD_COLUMNS; col++) {
				if (this.playground[col][row] == 1) {
					first++;
				}
				if (first == 3) {
					this.gameOver = true;
	
				}

				if (this.playground[col][row] == 2) {
					second++;
				}
				if (second == 3) {
					this.gameOver = true;
	
				}
			}

		}
		this.checkDiagonal(this.playground);
	}

	checkDiagonal(matrix) {
		const indices1 = [[0, 0], [1, 1], [2, 2]];
		const indices2 = [[0, 2], [1, 1], [2, 0]];
	  
		const values1 = indices1.map(([row, col]) => matrix[row][col]);
		const values2 = indices2.map(([row, col]) => matrix[row][col]);
	  
		if (values1.every(value => value === 1)) {
			this.gameOver = true;
		} else if (values1.every(value => value === 2)) {
			this.gameOver = true;
		} else if (values2.every(value => value === 1)) {
			this.gameOver = true;
		} else if (values2.every(value => value === 2)) {
			this.gameOver = true;
		}
	}
	  

	getWinner () {
		this.playerWinner = this.player;
		if(this.playerWinner == 2) alert('Выйграли Крестики!');
		if(this.playerWinner == 1) alert('Выйграли Нолики!');
		this.gameOver = false;
	}

}