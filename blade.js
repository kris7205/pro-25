class Blade
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    console.log(this.body.angle);
  }
  
 Show(){
  var position = this.body.position;
  //rect(position.x,position.y,this.w,this.h);
 // var angle = this.body.angle;
 Matter.Body.rotate(this.body,angle)
  push();
  translate(position.x,position.y);
  rotate(angle);
  rectMode(CENTER);
  rect(0,0,this.w,this.h);
 
  pop();
  angle=+0.02

}


}



   

