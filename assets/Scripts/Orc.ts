import {
  _decorator,
  AudioClip,
  AudioSource,
  CCInteger,
  Component,
  Node,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("Orc")
export class Orc extends Component {
  @property({ type: AudioClip })
  private Hit = null;

  audioSource: AudioSource = new AudioSource();

  start() {}

  update(deltaTime: number) {}

  onHit() {
    this.audioSource.playOneShot(this.Hit);
  }
}
