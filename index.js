document.addEventListener('DOMContentLoaded', function() {
  let randomizeBtn = document.getElementById('randomize-color-btn');

  randomizeColors(selectDivs());
  randomizeColors(randomizeBtn);

  randomizeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    randomizeColors(selectDivs());
    randomizeColors(randomizeBtn);
  });
});

function selectDivs() {
  let divs = [];
  for (let i = 1; i <= 6; i++) {
    divs.push(document.getElementById(`column-${i}`));
  }
  return divs;
}

function randomizeColors(elements) {
  if (elements.length > 0) {
    elements.forEach(element => {
      let r = randomNumBetween0And250();
      let g = randomNumBetween0And250();
      let b = randomNumBetween0And250();
      element.style.background = `rgb(${r}, ${g}, ${b})`;
      console.log(
        (element.children[0].children[0].innerText = `rgb(${r}, ${g}, ${b})`)
      );
    });
  } else {
    elements.style.background = `rgb(${randomNumBetween0And250()}, ${randomNumBetween0And250()}, ${randomNumBetween0And250()})`;
  }
}

function randomNumBetween0And250() {
  return Math.floor(Math.random() * 256);
}
