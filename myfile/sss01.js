var PShape square; 

function setup(){
createCanvas(400,400);

}

//循環執行 



  //var RECT = createShape(RECT, 0, 0, mouseY*3/10, sin(mouseX*3)*8);
  //var nsize=(mouseX,0,width,50,120);
    //Fill(mouseX,mouseY*3/5,255-nsize,2*mouseX/3);
  //var shape(RECT,mouseX,mouseY);
  

function draw(){
	function mouseDragged(){
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}
   stroke(255-mouseX,0,mouseY,100);
  
}
function mousePressed(){
  square = createShape(RECT, 0, 0, mouseY*cos(mouseX), mouseX*sin(mouseY));
}