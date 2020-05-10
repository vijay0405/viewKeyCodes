const insert = document.getElementById('insert');
const body = document.getElementById('main-body');

function generateRandomColor(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColors());
    }

    return arr;
}

var sounds = [
    'bubbles',
    'corona',
    'flash-2',
    'moon',
    'piston-2',
    'prism-2',
    'squiggle',
    'timer',
    'wipe',
    'clay',
    'dotted-spiral',
    'flash-3',
    'pinwheel',
    'piston-3',
    'prism-3',
    'strike',
    'ufo',
    'zig-zag',
    'confetti',
    'flash-1',
    'glimmer',
    'piston-1',
    'prism-1',
    'splits',
    'suspension',
    'veil'
];

function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
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
    let sound = sounds[Math.floor(Math.random() * sounds.length)]
    new Howl({ src: ['sounds/' + sound + '.mp3'] }).play();
});