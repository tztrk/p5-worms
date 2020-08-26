var sy=0
function setup() {
    createCanvas(500,500); 
}

function draw() {

  renkler();
  background(renk4);
  translate(width/2, height/2);

  stroke(renk5);
  strokeWeight(0.7);

  //sağalt 
  push();
  fill(renk0)
  guldalgozde();
  pop();
  
  
  //solalt
  push();
  scale(-1,1)
  fill(renk1)
  guldalgozde();
  pop();
  
  //sağüst
  push();
  fill(renk2)
  scale(-1,-1)
  guldalgozde();
  pop();
  
  //solüst
  push();
  fill(renk3)
  scale(1,-1)
  guldalgozde();
  pop();
  
  

  //print(sy,sy2,a, (255/.6)*(1-(a*0.5)));
}
function guldalgozde () {
  
    for (var i = 0; i < 50; i += 0.5) {
       a=noise(x , 100, frameCount * 0.01)
        b=noise(100, y , frameCount * 0.01) 
   
        var x = cos(radians(i));
        var y = sin(radians(i));
       
        var x2 = map(a, 0, 1, -400, 400);
        var y2 = map(b, 0, 1, -400, 400);
      
      circle(y2, y2, y2);
      circle(x2, y2, x2);
      circle(y2, x2, x2);
      
     // circle(x2, x2, y2);
     // circle(x2, y2, x2);
     // circle(y2, x2, x2);
    } }

//renkalternatifleri
function renkler(){
  //noise değeri  
  for (var i = 0; i < 180; i += 1) {
       a=noise(x , 100, frameCount * 0.005)
       var x = cos(radians(i));}
  //renkler
  if(sy==0){
    renk0=color(100*(a))
    renk1=color(100*(a*0.5))
    renk2=color(100*(a))
    renk3=color(100*(a*0.5))
    renk4=color((255/.6)*(1-(a*0.5)))
    renk5=color(255)
  }
 if(sy==1){
  renk0=color(100*(a*0.5))
  renk1=color((255/.6)*(a*1.2),0,0)
  renk2=color(100*(a*0.5))
  renk3=color((255/.6)*(a*1.2),0,0)
  renk4=color(255)
  renk5=color(255)
  }
   if(sy==2){
  renk0=color(random(0,(255/.6)*a),random(0,(255/.6)*a),random(0,(255/.6)*a))
  renk1=color(random(0,(255/.6)*a),random(0,(255/.6)*a),random(0,(255/.6)*a))
  renk2=color(random(0,(255/.6)*a),random(0,(255/.6)*a),random(0,(255/.6)*a))
  renk3=color(random(0,(255/.6)*a),random(0,(255/.6)*a),random(0,(255/.6)*a))
  renk4=color(0)
  renk5=color(0)
  }
}
//mouse tıklama
function mousePressed() {
 if (mouseButton === LEFT) {
  sy++;}
 if (mouseButton === RIGHT) {
  sy--;}
  if(sy <0) sy = 3-abs(sy);
  if(sy >3) sy = 0;
}

//hazır kod, sağ tıklamayla gelen menüyü kapatıyor
document.oncontextmenu = function() {
    return false;
}
