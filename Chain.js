class Chain {
    constuctor( bodyX, bodyY){
        var options = {
            bodyA:bodyX,
            bodyB:bodyY,
            stiffness:0.04,
            length:10
        }

          this.chain = Constraint.create(options);
          this.bodyX = bodyX;
          this.bodyY = bodyY;
          World.add(world,this.chain);
    }

    display(){
       var pointA = this.bodyX.position;
       var PointB = this.bodyY.position;
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);

    }
}