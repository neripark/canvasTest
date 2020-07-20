function onDown() {
  console.log("down");
}

function onUp() {
  console.log("up");
}

function onClick(e: MouseEvent, canvas: HTMLCanvasElement) {
  console.log("click");
  const x = e.clientX - canvas.offsetLeft;
  const y = e.clientY - canvas.offsetTop;
  console.log("x:", x, "y:", y);
  // console.log(canvas.offsetLeft);
  // console.log(canvas.offsetTop);
  // console.log(canvas.offsetWidth);
  // console.log(canvas.offsetHeight);

  const context = canvas.getContext('2d')!;
  context.fillRect(x, y, 10, 10);
}

function onOver() {
  console.log("mouseover");
}

function onOut() {
  console.log("mouseout");
}

const initCanvas = () => {
  const canvas = <HTMLCanvasElement>document.getElementById("canvas1")!;
  // canvas.addEventListener('mousedown', onDown, false);
  // canvas.addEventListener('mouseup', onUp, false);
  canvas.addEventListener('click', (e) => onClick(e, canvas), false);
  // canvas.addEventListener('mouseover', onOver, false);
  // canvas.addEventListener('mouseout', onOut, false);
};

export default initCanvas;
