// TEXTO MEME
const textInput = document.getElementById('text-input');

function text() {
  const memeText = document.getElementById('meme-text');
  memeText.innerHTML = textInput.value;
}

textInput.addEventListener('input', text);

// IMAGEM MEME

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
// Tem tudo sobre input do tipo file

const imageInput = document.getElementById('meme-insert');
const placedImage = document.getElementById('meme-image');

function imageUploaded(upload) {
const uploaded = upload.target.files;
placedImage.src = URL.createObjectURL(uploaded[0]);
}

imageInput.addEventListener('input', imageUploaded);

// BOTÕES
const memeContainer = document.getElementById('meme-image-container');
const buttons = document.getElementById('buttonsContainer').children;

for (let index = 0; index < buttons.length; index += 1) {
  buttons[index].addEventListener('click', border);
}

function border(event) {
  switch (event.target) {
    case document.getElementById('fire'):
      memeContainer.style.border = '3px dashed red';
      break;
    case document.getElementById('water'):
      memeContainer.style.border = '5px double blue';
      break;
    case document.getElementById('earth'):
      memeContainer.style.border = '6px groove green';
      break;
  }
}

// IMAGENS
const images = document.getElementById('images').children;

function image(event) {
  placedImage.src = event.target.src;
}

for (let index = 0; index < images.length; index += 1) {
  images[index].addEventListener('click', image);
}
