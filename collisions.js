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
        nofill();
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
        switch (typeof t){
            case BoxCollider:
                return t.Collide(this);
            case CircleCollider:
                return dist(pos, t.pos) < r + t.r;
        }
    }
    debugDraw(){
        nofill();
        stroke(0);
        circle(pos.x, pos.y, r);
    }
}