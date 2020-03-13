export class Point
{
    x:number;
    y:number;

    constructor(x?:number, y?:number){
        this.x=x;
        this.y=y;
    }

    draw(){
        console.log('X:' + this.x + 
                  '\nY:' + this.y);
    }

    distance(point1 : Point, point2 : Point){
        let distance = ((point1.x - point2.x)^2 + (point1.y - point2.y)^2)^(1/2);
        console.log(distance);
    }
}