class Tree{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.image = loadImage("Plucking mangoes/tree.png");
    }
    display(){
        image(this.image,400,200,300,350);
    }
}