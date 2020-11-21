class Box{
    constructor(x,y,w,h,col){
        let options = {
          restitution:0.9,
          mass:0.2,
          density:0.5
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.w = w;
        this.h = h;
        this.col = col;
        // this.image = loadImage("paper.png");
        
    }

    

    show()
    {
        
        let pos  =this.body.position;
        let angle = this.body.angle;
        push();

            translate(pos.x,pos.y);
            rotate(angle);
            ellipseMode(CENTER);
            fill(this.col);
            strokeWeight(3);
            stroke(0);
            rect(0,0,this.w,this.h);
            //scale(10);
        pop();
    }
}