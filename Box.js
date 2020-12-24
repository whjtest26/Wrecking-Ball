class Box{

    constructor(x,y,width,height){

        var options = {

            isStatic : false,
            restitution : 0.3,
            friction : 1.0,
            density : 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("box.png");
        this.Visibility = 255;

        World.add(world,this.body);
    }

    display(){

        console.log("SPeed = "+this.body.speed);

        var pos = this.body.position;
        var angle = this.body.angle;

       if(this.body.speed < 10){

            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image,0,0,50,50);
            
            pop(); 

       }

        if(this.body.speed > 10){

            World.remove(world,this.body);

            push();
            translate(pos.x,pos.y);
            rotate(angle);
            this.Visibility = this.Visibility - 5;
            tint(255,this.Visibility);
            image(this.image,0,0,50,50);
        
            pop(); 
        }


    }
}