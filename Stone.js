class Stone{
    constructor(bodyA,pointB){
        var options={
           bodyA:bodyA,
           pointB:pointB,
           stiffness: 0.04,
           length: 10
        }
        this.Stone = Constraint.create(options);
        World.add(world, this.Stone);
        this.image = loadImage("Plucking mangoes/stone.png");
    }
    fly()
    {
        this.Stone.bodyA=null;
    }
    display(){
        image(this.image,200,420,50,50);
        if(this.Stone.bodyA)
        {
        var pointA = this.Stone.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        keyPressed();
    }
}}
function keyPressed(){
    if(keyCode == 32){
        Matter.Body.setPosition(StoneObject.body,{x:235,y:420});
        launcherObject.attach(StoneObject.body)
    }
}
