const insert = document.getElementById('insert');
const body = document.getElementById('main-body');

function generateRandomColor(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColors());
	}

	return arr;
}

function randomColors(){
	var r = Math.floor(Math.random() * 256);	
	var g = Math.floor(Math.random() * 256);	
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";	
}

window.addEventListener('keydown', (e) => {
	console.log(e);
	insert.innerHTML = `
		<div class="key">
			${e.key === ' ' ? 'Space' : e.key}
			<small>event.key</small>
		</div>
		<div class="key">
			${e.keyCode}
			<small>event.keyCode</small>
		</div>
		<div class="key">
			${e.code}
			<small>event.code</small>
		</div>
    `
    let colors = generateRandomColor(50);
    body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});