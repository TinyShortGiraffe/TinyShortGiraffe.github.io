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
}

class CircleCollider {
    constructor(r, pos){
        this.r = r;
        this.pos = pos;
    }
    Collide(t){
        switch (typeof t){
            case BoxCollider:

                return;
            case CircleCollider:

                return;
        }
    }
}