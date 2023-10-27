function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	angleMode(DEGREES)
	frameRate(100)
}

function draw() {
	background(30)
	rotateX(map(mouseY, 0, windowHeight, 70, -70))
	rotateY(map(mouseX, 0, windowWidth, -45, 45))
	noFill()
	stroke(255)
	for (let i=0; i<30; i++) {	
		
		const r = map(sin(mouseY), -1, 1, 50, 255)
		const g = map(i, 0, 20, 50, 255)
		const b = map(cos(mouseX), -1, 1, 50, 255)
		
		stroke(r, g, b)
		
		beginShape()
		for (let j=0; j<360; j+=map(sin(frameCount), -1, 1, 5, 120)) {
			const rad = i * 10
			const x = rad * cos(j)
			const y = rad * sin(j)
			const z = sin(frameCount*2 + i * 10) * 70
			vertex(x, y, z)
		}
		endShape(CLOSE)
	}
}