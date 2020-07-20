function onDown() {
  console.log("down");
}

function onUp() {
  console.log("up");
}

function onClick(e: MouseEvent) {
  console.log("click");
  const cv = new myCanvas();
  const x = e.clientX - cv.canvas.offsetLeft;
  const y = e.clientY - cv.canvas.offsetTop;
  console.log("x:", x, "y:", y);
  // console.log(canvas.offsetLeft);
  // console.log(canvas.offsetTop);
  // console.log(canvas.offsetWidth);
  // console.log(canvas.offsetHeight);

  const context = cv.canvas.getContext("2d")!;
  context.fillRect(x, y, 10, 10);
}

function onOver() {
  console.log("mouseover");
}

function onOut() {
  console.log("mouseout");
}

// ___
class myCanvas {
  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;

  constructor() {
    this.canvas = <HTMLCanvasElement>document.getElementById("canvas1")!;
    this.context = this.canvas.getContext("2d")!;
  }
}

function onReset() {
  const cv = new myCanvas();
  cv.context?.clearRect(0, 0, cv.canvas.offsetWidth, cv.canvas.offsetHeight);
}

// ___
const renderImage = () => {
  const src =
    "https://i.picsum.photos/id/866/800/450.jpg?hmac=Kx_j9jGAQQzF5ocGagmpKOukpHK9lP7CJNDNGW5UmPk";
  const img = new Image();
  img.src = src;

  img.onload = () => {
    console.log("onloaded!!");
    const cv = new myCanvas();
    cv.canvas.setAttribute("width", img.width.toString());
    cv.canvas.setAttribute("height", img.height.toString());
    cv.context?.drawImage(img, 0, 0, img.width, img.height);
  };
};

const initCanvas = () => {
  const resetButton = <HTMLButtonElement>document.getElementById("resetCanvas");
  const drawButton = <HTMLButtonElement>document.getElementById("drawImage");
  const cv = new myCanvas();

  resetButton.addEventListener("click", () => onReset(), false);
  drawButton.addEventListener("click", (e) => renderImage(), false);
  // canvas.addEventListener('mousedown', onDown, false);
  // canvas.addEventListener('mouseup', onUp, false);
  // canvas.addEventListener('mouseover', onOver, false);
  // canvas.addEventListener('mouseout', onOut, false);
  cv.canvas.addEventListener("click", (e) => onClick(e), false);
};

export default initCanvas;
