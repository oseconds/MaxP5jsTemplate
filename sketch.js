function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(30);

} 

function draw() {
  //투명한 배경 background()대신 clear()사용, jweb rendermode $2
  background(v3);
  fill(255,180,50);
  ellipse(mouseX, mouseY, v1, v2);

  //데이터값을 Max로 보내기
  MaxOut('Out1', mouseX, mouseY);
  MaxOut('frameCount',frameCount);

}
