class Pos {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

function dist2(p1, p2){
    xc = (p2.x - p1.x);
    yc = (p2.y - p1.y);
    return (xc * xc) + (yc * yc);
}

function distance(p1, p2){
    return Math.sqrt(dist2(p1, p2));
}