const rightButton = document.getElementById("right");

rightButton.onclick = () => {
  document.getElementById("filterContainer").scrollLeft += 300;
};

console.log(rightButton);

const leftButton = document.getElementById("left");
leftButton.onclick = () => {
  document.getElementById("filterContainer").scrollLeft -= 300;
};

console.log(leftButton);
