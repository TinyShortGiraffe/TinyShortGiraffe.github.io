//import dist from "untils.js"
class BoxCollider {
    constructor(pos, w, h){
        this.pos = pos;
        this.w = w;
        this.h = h;
    }
    Collide(o){
        if(o instanceof BoxCollider){
            let oTop = o.pos.y;
            let oBottom = o.pos.y + o.h;
            let oLeft = o.pos.x;
            let oRight = o.pos.x + o.w;
            // if not horozontally alligned, return false
            if( oBottom < this.pos.y || oTop > this.pos.y + this.h){
               return false; 
            }
            // check x
            if( oRight < this.pos.x || oLeft > this.pos.x + this.w){
                return false;
            }
            return true;

        }else if (o instanceof CircleCollider){
            console.log("AH")
            let outL = this.pos.x - o.r;
            let outR = this.pos.x + this.w + o.r;
            let outT = this.pos.y - o.r;
            let outB = this.pos.y + this.h + o.r;
            let innerX = false;
            let outerX = false;
            
            console.log(outL, outR)
            if(o.pos.x < this.pos.x + this.w){
                if(o.pos.x > this.pos.x){
                    innerX = true;
                }else{
                    if(o.pos.x > outL){
                        outerX = true;
                    }
                }
            }else{
                if(o.pos.x < outR){
                    outerX = true;
                }
            }
            outerX = outerX || innerX;
            let innerY = false;
            let outerY = false;
            if(o.pos.y < this.pos.y + this.h){
                if(o.pos.y > this.pos.y){
                    innerY = true;
                }else{
                    if(o.pos.y > outT){
                        outerY = true;
                    }
                }
            }else{
                if(o.pos.y < outB){
                    outerY = true;
                }
            }
            outerY = outerY || innerY;
            console.log(outerX, outerY)
            console.log(innerX, innerY)
            if((innerX && outerY) || (outerX && innerY)){
                return true;
            }
            if(outerX && outerY){
                if(o.pos.x < this.pos.x){
                    if(o.pos.y < this.pos.y){
                        return distance(this.pos, o.pos) < o.r;
                    }else{
                        return distance(new Pos(this.pos.x, this.pos.y + this.h), o.pos) < o.r;
                    }
                }else{
                    if(o.pos.y < this.pos.y){
                        return distance(new Pos(this.pos.x + this.w, this.pos.y), o.pos) < o.r;
                    }else{
                        return distance(new Pos(this.pos.x + this.w, this.pos.y + this.h), o.pos) < o.r;
                    }
                }
            }
        }
    }
    debugDraw(){
        noFill();
        stroke(0);
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }
}

class CircleCollider {
    constructor(pos, r){
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