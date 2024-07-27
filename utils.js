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

function deAtlas(img, rows, cols, sw, sh){
    let sprites = [];
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            let sprite = img.get(x * sw, y * sh, sw, sh);
            sprites.push(sprite);
        }
    }
    return sprites;
}

function displayTileSet(spriteWidth, spriteHeight) {
    let x = 0;
    let y = 0;
    for (let i = 0; i < tiles.length; i++) {
      image(tiles[i], x, y);
      x += spriteWidth;
      if (x >= width) {
        x = 0;
        y += spriteHeight;
      }
    }
}