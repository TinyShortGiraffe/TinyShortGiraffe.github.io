//import dist from "untils.js"
class BoxCollider {
    constructor(pos, w, h){
        this.pos = pos;
        this.w = w;
        this.h = h;
    }
    Collide(t){
        switch (typeof t){
            case BoxCollider:
                return;
            case CircleCollider:
                return;
        }
    }
    debugDraw(){
        noFill();
        stroke(0);
        rect(pos.x, pos.y, w, h);
    }
}

class CircleCollider {
    constructor(r, pos){
        this.r = r;
        this.pos = pos;
    }
    Collide(t){
        if(t instanceof BoxCollider){
            return t.Collide(this);
        }else if (t instanceof CircleCollider){
            return distance(this.pos, t.pos) < this.r + t.r;
        }
    }
    debugDraw(){
        noFill();
        stroke(0);
        circle(this.pos.x, this.pos.y, this.r * 2);
    }
}