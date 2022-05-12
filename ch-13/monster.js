
class Monster {
  constructor(pos, speed) {
    this.pos = pos;
    this.speed = speed;
  }

  get type() {
    return "monster";
  }

  static create(pos) {
    return new Monster(pos.plus(new Vec(0, -0.5)), new Vec(0, 0));
  }
}
Monster.prototype.size = new Vec(0.8, 1.5);
