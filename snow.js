class Snow {
    constructor(x,y,width,height){
    var options = {
       'restitution' : .8,
       'friction':1,
       'density':1,
    }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/snow4.webp");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
      }
}
