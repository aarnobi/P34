class Fly{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.01,
            length: 10
        }
        strokeWeight(0);
        this.pointB=pointB;
        this.fly = Constraint.create(options);
        World.add(world, this.fly); 
    }

    fly(){
        this.fly.bodyA=null;
    }

    Launch(bodyA){
        this.fly.bodyA=bodyA;
    }

    display(){
    }
    
}