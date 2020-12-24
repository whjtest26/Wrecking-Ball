class Rope{

    constructor(bodyA,pointB){

        var options = {

            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.2,
            length : 500
        }

        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);

    }
    attach(body){

        this.rope.bodyA = body;
    }

    fly(){

        this.rope.bodyA = null;
    }

    display(){

        if(this.rope.bodyA){

            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;

            push();
            fill("#81FF5B");
            stroke("#81FF5B")
            strokeWeight(3);
            line(pointA.x,pointA.y-50,pointB.x,pointB.y);

            pop();
        }
        
    }
}