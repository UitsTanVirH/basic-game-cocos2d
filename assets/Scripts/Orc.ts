import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Orc")
export class Orc extends Component {
  start() {}

  update(deltaTime: number) {
    this.node.setPosition(
      (this.node.getPosition().x += 100 * deltaTime),
      this.node.position.y,
    );
  }
}
