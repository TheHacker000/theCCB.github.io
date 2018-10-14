let col_0 = [3];
let col_1 = [4];
let col_2 = [3];

let w = 80;
let anchor = 100;

function setup() {
  createCanvas(300, 400);
  for (let i = 0; i < 4; i++) {
    if (i !== 3) {
      col_0[i] = new Tile(20, anchor + i * w);
      col_2[i] = new Tile(20 + 2 * w, anchor + i * w);
    }
    col_1[i] = new Tile(20 + w, anchor - w + i * w);
  }
}

function draw() {
  background(67, 10, 10);
  for (let i = 0; i < 4; i++) {
    if (i !== 3) {
      col_0[i].show();
      col_2[i].show();
    }
    col_1[i].show();
  }
}


function mousePressed() {
  for (let i = 0; i < 10; i++) {
    if (i < 3) {
      if (collide(col_0[i])) {
        col_0[i].changeVal();
        break;
      }
    } else if (i < 7) {
      if (collide(col_1[i - 3])) {
        col_1[i - 3].changeVal();
        break;
      }
    } else {
      if (collide(col_2[i - 7])) {
        col_2[i - 7].changeVal();
        break;
      }
    }
  }
}

function collide(tile) {
  if (mouseX > tile.x && mouseX < tile.x + w && mouseY > tile.y && mouseY < tile.y + w) {
    return true;
  } else {
    return false
  }

}

class Tile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.val = 1;
  }

  show() {
    strokeWeight(2);
    fill(255, 50);
    rect(this.x, this.y, w, w);
    fill(0);
    textSize((this.val > 9) ? 3 * w / 4 : w);
    text(this.val, (this.val > 9) ? (this.x + w / 16) : (this.x + w / 4), this.y + w - 10);
  }

  changeVal() {
    this.val++;
    if (this.val > 10) {
      this.val = 1;
    }
  }

}