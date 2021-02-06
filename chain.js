class Chain {
    constructor(bodyA,bodyB,offsetX,offsetY){
      
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.1,
            friction:2,
            length:320,
        pointB:{x:this.offsetX,y:this.offsetY}
        
        }
        this.chain=constraint.create(options)
        this.offsetX=offsetX
        this.offsetY=offsetY
       // rope=constraint.create(options)
          World.add(world,this.chain)
    }
    display(){
       // line(bird.body.position.x,bird.body.position.y,constrainedlog.body.position.x,constrainedlog.body.position.y)
  var pointA=this.chain.bodyA.position
  var pointB=this.chain.bodyB.position
  strokeWeight(5)
  stroke("white")
  var Anchor1X=pointA.x
  var Anchor1Y=pointA.y
  var Anchor2X=pointA.x+this.offsetX
  var Anchor2Y=pointA.y+this.offsetY
       line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)
    }
}