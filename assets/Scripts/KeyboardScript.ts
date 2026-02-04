import {
  _decorator,
  animation,
  Animation,
  Component,
  EventKeyboard,
  Input,
  input,
  KeyCode,
  Node,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("KeyboardScript")
export class KeyboardScript extends Component {
  isWaliking = false;
  onLoad() {
    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
  }
  start() {}

  update(deltaTime: number) {
    if (this.isWaliking) {
      this.getComponent(Animation).crossFade("walking");
      this.node.setPosition(
        (this.node.getPosition().x += 100 * deltaTime),
        this.node.position.y,
      );
    } else {
    }
  }

  onKeyDown(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.ARROW_RIGHT:
        this.isWaliking = true;
        break;
      case KeyCode.SPACE:
        this.getComponent(Animation).crossFade("attack");
        break;
    }
  }

  onKeyUp(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.ARROW_RIGHT:
        this.getComponent(Animation).stop();
        this.isWaliking = false;
        break;
    }
  }
}
