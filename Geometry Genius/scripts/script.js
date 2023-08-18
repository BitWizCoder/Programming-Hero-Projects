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

  // Add to sidebar
  addToCalculationEntry("Parallelogram", parallelogram);
});

// rhombus
const rhombusBtn = document.getElementById("rhombus-btn");
rhombusBtn.addEventListener("click", () => {
  const rhombusBase = inputToNum("rhombus-base");
  const rhombusHeight = inputToNum("rhombus-height");
  const rhombus = 0.5 * rhombusBase * rhombusHeight;

  addToElement("rhombus-area", rhombus);
});

// pentagon
const pentagonBtn = document.getElementById("pentagon-btn");
pentagonBtn.addEventListener("click", () => {
  const pentagonBase = inputToNum("pentagon-base");
  const pentagonHeight = inputToNum("pentagon-height");
  const pentagon = 0.5 * pentagonBase * pentagonHeight;

  addToElement("pentagon-area", pentagon);
});

// ellipse
const ellipseBtn = document.getElementById("ellipse-btn");
ellipseBtn.addEventListener("click", () => {
  const ellipseBase = inputToNum("ellipse-base");
  const ellipseHeight = inputToNum("ellipse-height");
  const ellipse = 3.14 * ellipseBase * ellipseHeight;

  addToElement("ellipse-area", ellipse);
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

// Add to Side
function addToCalculationEntry(areaType, area) {
  console.log(areaType + " " + area);
  const calculationEntry = document.getElementById("calculation-entry");

  const count = calculationEntry.childElementCount;

  const p = document.createElement("p");
  p.classList.add('my-4')
  p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

  calculationEntry.appendChild(p);
}
