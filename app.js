const generateNewHex = document.querySelector('.generate-new');
const hexCode = document.querySelector('.hex-code');
const copyMe = document.querySelector('.copy-me');
const modelContent = document.querySelector('.model-content');
const audio = new Audio('pling.mp3');

// random background color
function setBackgroundColor() {
  const randomHex = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = '#' + randomHex;
  hexCode.innerHTML = '#' + randomHex;
}

generateNewHex.addEventListener('click', setBackgroundColor);

// copys the hex color
function copyHexColor() {
  const text = hexCode.innerText;
  const element = document.createElement('textarea');
  document.body.appendChild(element);
  element.value = text;
  element.select();
  document.execCommand('copy');
  document.body.removeChild(element);

  clipBoardOpen();
  setTimeout(clipBoardClose, 1000);
}
copyMe.addEventListener('click', copyHexColor);

// open model when copy text
const clipBoardOpen = () => {
  if (modelContent.classList.contains('hide-model')) {
    modelContent.classList.remove('hide-model');
    modelContent.classList.add('show-model');
    audio.play();
  }
};

// close model after 2 seconds
const clipBoardClose = () => {
  if (modelContent.classList.contains('show-model')) {
    modelContent.classList.remove('show-model');
    modelContent.classList.add('hide-model');
  }
};
