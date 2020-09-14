class Mango{
    constructor(){
        var options={
            isStatic: true,
            restitution:0,
            friction:1,
        }
        
        this.image = loadImage("Plucking mangoes/mango.png");
      }
      display(){
        
        image(this.image,400,250,40,40);
}
}