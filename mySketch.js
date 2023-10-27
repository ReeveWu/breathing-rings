function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	angleMode(DEGREES)
	frameRate(100)
}

function draw() {
	background(30)
	rotateX(60)
	rotateY(map(sin(frameCount*0.5), -1, 1, -45, 45))
	
	noFill()
	stroke(255)
	
	for (var i=0; i<30; i++) {		
		let r = map(sin(frameCount), -1, 1, 50, 255)
		let g = map(i, 0, 20, 50, 255)
		let b = map(cos(frameCount), -1, 1, 50, 255)
		
		stroke(r, g, b)
		
		beginShape()
		for (var j=0; j<360; j+=map(sin(frameCount), -1, 1, 5, 120)) {
			let rad = i * 10
			let x = rad * cos(j)
			let y = rad * sin(j)
			let z = sin(frameCount*2 + i * 10) * 70
			
			vertex(x, y, z+100)
		}
		endShape(CLOSE)
	}
}