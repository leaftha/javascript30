export class Block {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.maxX = width + x;
    this.maxY = height + y;
  }

  draw(ctx) {
    const xGrp = 80;
    const yGrp = 60;

    ctx.fillStyle = "#ff384e";
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();

    ctx.fillStyle = "#190f3a";
    ctx.beginPath();
    ctx.moveTo(this.maxX, this.maxY);
    ctx.lineTo(this.maxX - xGrp, this.maxY + yGrp);
    ctx.lineTo(this.x - xGrp, this.maxY + yGrp);
    ctx.lineTo(this.x, this.maxY);
    ctx.fill();

    ctx.fillStyle = "#9d0919";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.maxY);
    ctx.lineTo(this.x - xGrp, this.maxY + yGrp);
    ctx.lineTo(this.x - xGrp, this.maxY + yGrp - this.height);
    ctx.fill();
  }
}
