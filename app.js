const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [];
let audio = new Audio("./tunes/a.wav");
const playTune = (key) => {
  audio.src = `./tunes/${key}.wav`; // passing audio src based on key pressed
  audio.play(); // playing audio

  const clickedKey = document.querySelector(`[data-key="${key}"]`); // getting clicked key element
  clickedKey.classList.add("active");
  setTimeout(() => {
    // removing active class after 150ms from the clicked key element
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  allKeys.push(key);
  // calling playTune function with passing data-key value as an argument
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleValue = (e) => {
  audio.volume = e.target.value; // pressing the range slider value as an audio volume
};

const showHideKeys=()=>{
  // toggling hide class from each key on the checkbox click
  pianoKeys.forEach(key=> key.classList.toggle("hide"))
}

// key press play
const pressedKey = (e) => {
  // if the pressed key is in the allKeys array, only call the palyTune function
  if (allKeys.include(e.key)) playTune(e.key);
};


keysCheckbox.addEventListener("input", showHideKeys);
volumeSlider.addEventListener("input", handleValue);
document.addEventListener("keydown", pressedKey);
