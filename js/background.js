const background = ["00 budapest.jpg", "02 paris.jpg", "03 valensole.jpg"];
const randomBackground =
  background[Math.floor(Math.random() * background.length)];
document.body.style.backgroundImage = `url('src/${randomBackground}')`;
