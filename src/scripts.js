import "../styles/style.css"
import { CAM } from "./CrossAndMarcs"
import { PLAYFIELD_COLUMNS, PLAYFIELD_ROWS } from "./variables";

const game = new CAM();
const cells = document.querySelectorAll('.grid>div');
game.cells = cells;

initPlayGround();

document.querySelector('.btn_restart').addEventListener('click', () => {
	game.generatePlayField();
	cells.forEach(ceil => {
		ceil.childNodes[0].src = '';
		ceil.childNodes[0].style.display = 'none';
	})
	game.player = 1;
	localStorage.removeItem('map');
	cells.forEach(ceil => ceil.addEventListener('click', game.onClick));
	interval = setInterval(()=> {
		if (game.gameOver) {
			cells.forEach(ceil => ceil.removeEventListener('click', game.onClick));
			clearInterval(interval);
			game.getWinner();
			localStorage.removeItem('map');
		}
	}, 1)
})

let interval = setInterval(()=> {
	if (game.gameOver) {
		cells.forEach(ceil => ceil.removeEventListener('click', game.onClick));
		console.log('remove click listeners');
		clearInterval(interval);
		game.getWinner();
		localStorage.removeItem('map');
	}
}, 1)


function initPlayGround() {
	if(localStorage.getItem('map')) {
		game.playground = JSON.parse(localStorage.getItem('map'));
		game.player = JSON.parse(localStorage.getItem('player'));
		FillPlayGroundRefresh();
	}
	cells.forEach(ceil => ceil.addEventListener('click', game.onClick));
	document.querySelector('body').addEventListener('click', () => {
		FillPlayGround();
	});

}


function ConverToCEil (row, col) {
	if(row === 2) {
		row += 3;
		col += 1;
	};
	if(row === 1) {
		row += 1
		col += 1;
	};
	return ((row ) + (col));
}

function FillPlayGround () {
	for(let row = 0; row < PLAYFIELD_ROWS; row++) {
		for(let col = 0; col < PLAYFIELD_COLUMNS; col++) {
			if(game.playground[row][col] == 0) continue;
			const ceil = cells[ConverToCEil(row,col)];
			if(ceil.children[0].src === 'http://localhost:5000/') {
				if(game.player === 2) {
					ceil.children[0].src = 'https://cdn-icons-png.flaticon.com/512/7420/7420933.png';
					ceil.children[0].style.display = 'block';
				}
				if(game.player === 1) {
					ceil.children[0].src= 'https://cdn-icons-png.flaticon.com/512/32/32463.png';
					ceil.children[0].style.display = 'block';
				}
			};
		}
	}
}

function FillPlayGroundRefresh () {
	for(let row = 0; row < PLAYFIELD_ROWS; row++) {
		for(let col = 0; col < PLAYFIELD_COLUMNS; col++) {
			if(game.playground[row][col] == 0) continue;
			const ceil = cells[ConverToCEil(row,col)];
			if(ceil.children[0].src === 'http://localhost:5000/') {
				if(game.playground[row][col] === 1) {
					ceil.children[0].src = 'https://cdn-icons-png.flaticon.com/512/7420/7420933.png';
					ceil.children[0].style.display = 'block';
				}
				if(game.playground[row][col] === 2) {
					ceil.children[0].src= 'https://cdn-icons-png.flaticon.com/512/32/32463.png';
					ceil.children[0].style.display = 'block';
				}
			};
		}
	}
}

