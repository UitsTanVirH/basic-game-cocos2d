import { _decorator, Button, Component, director, Event, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("MainScript")
export class MainScript extends Component {
  @property({ type: Button })
  private play: Button = null;

  onLoad() {
    this.play.node.on(Button.EventType.CLICK, () => {
      director.loadScene("scene");
    });
  }

  start() {}

  update(deltaTime: number) {}
}
