const circles = document.querySelectorAll('.circle');
const progressBar = document.querySelector('#progress');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

const numOfSteps = circles.length;
const portion = 100 / (numOfSteps - 1);
let activeStep = 1;

prevButton.addEventListener('click', stepBackward);
nextButton.addEventListener('click', stepForward);

function stepForward(e) {
    activeStep++;
    if (activeStep === numOfSteps) {
        nextButton.disabled = true;
    }
    if (prevButton.disabled === true) prevButton.disabled = false;

    circles[activeStep - 1].classList.add('active');

    setProgressBar();
}

function stepBackward(e) {
    activeStep--;
    if (activeStep === 1) {
        prevButton.disabled = true;
    }
    if (nextButton.disabled === true) nextButton.disabled = false

    circles[activeStep].classList.remove('active');

    setProgressBar();
}

function setProgressBar() {
    progressBar.style.width = `${Math.floor((activeStep - 1) / (numOfSteps - 1) * 100)}%`;
}