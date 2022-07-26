interface DomInterface {
  currentTime: HTMLDivElement;
  startButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
  resetButton: HTMLButtonElement;
  [x: string]: HTMLElement;
}

abstract class Stopwatch {
  protected currentTime: number = 0;
  private timer: number | null = null;
  protected dom = {} as DomInterface;

  constructor(element: HTMLDivElement) {
    this.getElements(element);
    this.initActions();
    this.renderTime();
  }

  protected getElements(element: HTMLDivElement): void {
    this.dom.currentTime = element.querySelector(
      ".stopwatch__current-time"
    ) as HTMLDivElement;
    this.dom.startButton = element.querySelector(
      ".stopwatch__start-btn"
    ) as HTMLButtonElement;
    this.dom.stopButton = element.querySelector(
      ".stopwatch__stop-btn"
    ) as HTMLButtonElement;
    this.dom.resetButton = element.querySelector(
      ".stopwatch__reset-btn"
    ) as HTMLButtonElement;
  }

  protected initActions(): void {
    this.dom.startButton.addEventListener("click", this.start);
    this.dom.stopButton.addEventListener("click", this.stop);
    this.dom.resetButton.addEventListener("click", this.reset);
  }

  protected formatTime(time: number): string {
    var mins: number = Math.floor((time / 60000) % 60);
    var secs: number = Math.floor(time / 1000) % 60;
    var miliSecs: number = time % 1000;
    var formattedTime: string = "";

    formattedTime +=
      this.formatZeros(mins) +
      ":" +
      this.formatZeros(secs) +
      ":" +
      this.formatZeros(~~(miliSecs / 10));
    return formattedTime;
  }

  private formatZeros(input: number): string {
    return (input < 10 ? "0" : "") + input;
  }

  protected renderTime(): void {
    this.dom.currentTime.innerText = this.formatTime(this.currentTime);
  }

  protected step = (): void => {
    this.currentTime++;
    this.renderTime();
  }

  protected start = (): void =>{
      this.timer = window.setInterval(this.step, 1);
  }

  protected stop = (): void => {
    clearInterval(this.timer as number);
  }

  protected reset = (): void => {
    this.currentTime = 0;
    this.renderTime();
  }
}

export default Stopwatch;
