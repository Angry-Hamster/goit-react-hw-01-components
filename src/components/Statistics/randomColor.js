function getRandomColor() {
  var letters = '56789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 11)];
  }
  return color;
}

export default getRandomColor
