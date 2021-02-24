class Stone{
    constructor(x, y,diametre) {
        var options = {
           isStatic:false,
           restitution:0,
           friction:1,
           density:1.2
        }
        this.body = Bodies.circle(x, y, diametre, options);
        this.diametre=diametre/2;
        this.image = loadImage("images/stone.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        image(this.image, 0, 0, this.diametre*2,this.diametre*2);
        pop();
      }
}