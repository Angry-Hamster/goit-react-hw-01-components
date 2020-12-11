function getRandomColor() {
  let letters = '456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 12)];
  }
  return color;
}

export default getRandomColor

