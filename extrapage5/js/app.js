import { Ball } from "./ball.js";
import { Block } from "./block.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    this.ball = new Ball(this.stagWidth, this.stagHeight, 60, 15);
    this.block = new Block(700, 30, 300, 450);

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stagWidth = document.body.clientWidth;
    this.stagHeight = document.body.clientHeight;

    this.canvas.width = this.stagWidth * 2;
    this.canvas.height = this.stagHeight * 2;
    this.ctx.scale(2, 2);
  }

  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stagWidth, this.stagHeight);

    this.block.draw(this.ctx);
    this.ball.draw(this.ctx, this.stagWidth, this.stagHeight, this.block);
  }
}

window.onload = () => {
  new App();
};
