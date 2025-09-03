let container = document.querySelector("#container");

let selectSize = document.querySelector("#select-size");
let clearbutton = document.querySelector("#btn-clearGrid");

let buttonRainbow = document.querySelector("#btn-random");
let buttonBlack = document.querySelector("#btn-blackColor");

function createGrid(numSquares) {
  container.innerHTML = " ";

  for (let i = 0; i < numSquares * numSquares; i++) {
    let squareDiv = document.createElement("div");
    let squareSize = 480 / numSquares;

    squareDiv.classList.add("square");

    squareDiv.style.width = `${squareSize}px`;
    squareDiv.style.height = `${squareSize}px`;

    squareDiv.addEventListener("mouseover", () => {
      squareDiv.style.backgroundColor = "black";
    });

    buttonRainbow.addEventListener("click", () => {
      squareDiv.addEventListener("mouseover", () => {
        squareDiv.style.backgroundColor = randomColor();
      });
    });

    // buttonBlack.addEventListener("click",()=>{
    //     squareDiv.addEventListener("mouseover",()=>{
    //         squareDiv.style.backgroundColor = "black";
    //     });
    // });

    clearbutton.addEventListener("click", () => {
      squareDiv.style.backgroundColor = "white";
    });

    container.appendChild(squareDiv);
  }
}
selectSize.addEventListener("click", () => {
  let userInput = prompt("Enter the number in 0 to 100");
  userInput = parseInt(userInput);

  if (userInput > 100 || userInput < 1) {
    return;
  }
  createGrid(userInput);
});

function randomColor(params) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
}

createGrid(16);
