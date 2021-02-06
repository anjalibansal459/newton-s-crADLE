class Circle{
constructor(x,y,radius){
    this.body=Bodies.circle(x,y,radius)
this.radius=radius
World.add(world,this.body)
}

display(){
    var pos=this.body.position;
    ellipseMode(RADIUS)
    fill("pink");
    ellipse(pos.x,pos.y,this.radius);
    
        }
    }