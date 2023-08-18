// Triangle
const triangleBtn = document.getElementById("triangle-btn");
triangleBtn.addEventListener("click", () => {
  const triangleBase = inputToNum("triangle-base");
  const triangleHeight = inputToNum("triangle-height");
  const triangle = 0.5 * triangleBase * triangleHeight;

  addToElement("triangle-area", triangle);
});

// Rectangle
const rectangleBtn = document.getElementById("rectangle-btn");
rectangleBtn.addEventListener("click", () => {
  const rectangleWidth = inputToNum("rectangle-width");
  const rectangleLength = inputToNum("rectangle-length");
  const rectangle = rectangleWidth * rectangleLength;

  addToElement("rectangle-area", rectangle);
});

// Parallelogram
const parallelogramBtn = document.getElementById("parallelogram-btn");
parallelogramBtn.addEventListener("click", () => {
  const parallelogramBase = inputToNum("parallelogram-base");
  const parallelogramHeight = inputToNum("parallelogram-height");
  const parallelogram = parallelogramBase * parallelogramHeight;

  addToElement("parallelogram-area", parallelogram);
});

// Util Functions
function inputToNum(input) {
  const inputStr = document.getElementById(input);
  const inputNum = Number(inputStr.value);
  inputStr.value = "";
  return inputNum;
}

function addToElement(element, value) {
  const elementStr = document.getElementById(element);
  elementStr.textContent = value;
}
