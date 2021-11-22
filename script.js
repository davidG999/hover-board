const board = document.querySelector('#board')
const colors = ['#1abc9c', '#4efc53', '#3498db', '#9b59b6', '#ff3f34', '#f1c40f', '#f57e33', '#48dbfb']
const SQUARES_NUMBER = 600

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('span')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 10px ${color}, 0 0 15px ${color}`

  board.style.boxShadow = `0 0 30px 30px ${color}, 0 0 600px 100px ${color}`
  board.style.transition = '.2s linear'
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`

  board.style.boxShadow = '0 0 40px 10px #000'
  board.style.transition = `1s linear`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}