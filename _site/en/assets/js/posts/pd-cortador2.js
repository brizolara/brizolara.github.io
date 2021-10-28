function sketch_div_cortador2(p)
{
	var canstart = true;
	var patchImage;
	var slider_f1, slider_f2;

	p.setup = function ()
	{
	  p.createCanvas(642,651);

	  patchImage = p.loadImage("../assets/images/pd-cortador2.png");

	//   slider_f1 = p.createSlider(0, 1, 1);
	//   slider_f1.position(243, 504);
	//   slider_f1.size(14, 3);
	//   slider_f2 = p.createSlider(0, 1, 1);
	}
  
	p.draw = function () {
		p.image(patchImage,0,0);

		drawVertSliderDefault(243, 375, p.color(196,252,196), 0, 1, document.getElementById("vol1").value);
		drawVertSliderDefault(511, 375, p.color(196,252,196), 0, 1, document.getElementById("vol2").value);
		drawFloatAtomDefault(242,516,document.getElementById("vol1").value);

	  // stuff to draw
	  if(canstart) {
		p.noStroke();
		//p.fill(0);
		p.textSize(30);
		p.textAlign( p.CENTER, p.CENTER );
		//p.text( "Touch to start drawing & make some noise", p.width / 2, p.height / 2 );
		}

		// Pd.send('vol1', [ slider_f1.value() ]);
		// Pd.send('vol2', [ slider_f2.value() ]);
	}

	/*p.mouseDragged = function() {
		if(canstart) {
			//Pd.start();
			canstart = false;
		  }
		p.ellipse( p.mouseX, p.mouseY, 10, 10 );
	}/**/

	function drawVertSliderDefault(x, y, color, min, max, val)
	{
		p.stroke(0);
		p.strokeWeight(1);

		p.fill(color);//196, 252, 196
		p.rectMode(p.CORNER);
		p.rect(x,y,15,128);

		p.fill(0);

		//	w = 15, h = 128
		p.rect(x,y+128-val*(max-min)*128.0, 15, 2);
	}

	function drawHorizSliderDefault(x, y, color, min, max, val)
	{
		p.stroke(0);
		p.strokeWeight(1);

		p.fill(color);//196, 252, 196
		p.rectMode(p.CORNER);
		p.rect(x,y,128,15);

		p.fill(0);

		//	w = 128, h = 15
		p.rect(x+128-val*(max-min)*128.0, y, 2, 15);
	}

	function drawFloatAtomDefault(x, y, val)
	{
		p.fill(255);
		p.noStroke();
		p.rect(x,y,38+1,19);

		p.fill(0);
		p.stroke(0);
		p.strokeWeight(1);
		p.line(x,    y,    x+34, y);
		p.line(x+34, y,    x+38, y+4);
		p.line(x+38, y,    x+38, y+15);
		p.line(x+38, y+15, x,    y+15);
		p.line(x,    y+15, x,    y);
		p.textSize(13);
		p.textAlign( p.LEFT, p.TOP );
		p.text( val, x, y+2 );
	}
}

new p5(sketch_div_cortador2, 'div_cortador2')

/*var canstart = true;

//	notice: functions are called "void" in processing, 
//	but they are called "function" in javascript

function setup() {	
	//	instead of size, use this
	createCanvas(windowWidth,windowHeight);

	//	Nosso sketch ira aparecera dentro do div com id="sketch-container"
	canvas.parent('sketch-container');

	background(255);
}

function draw() {
	if(canstart) {
		noStroke();
		fill(0);
		textSize(30);
		textAlign( CENTER, CENTER );
		text( "Touch to start drawing & make some noise", width / 2, height / 2 );
	}
}

function mouseDragged() {
	if(canstart) {
    	Pd.start();
    	background(255);
    	canstart = false;
  	}
  	Pd.send('vol1', [ map( mouseX, 0, width, 0, 1 ) ]);
  	Pd.send('vol2', [ map( mouseY, 0, height, 1, 0 ) ]);
	ellipse( mouseX, mouseY, 10, 10 );
}*/