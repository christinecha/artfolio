var paintings = [
  'flowers',
  'trees',
  'flame',
  'green-pepper',
  'red-pepper',
  'blueberry-pie',
  'self-portrait-i',
  'self-portrait-ii',
  'portrait-of-or'
]

function getBlocks() {
  return paintings.map(function(p) {
    return {
      title: p.toUpperCase().replace(/-/g, ' '),
      classname: p
    }
  })
}

var gridfolio = new Gridfolio({

  container: '#paintings',
  options: {
    animateIntoView: true,
    breakpoints: [
      { minWidth: 0, gridWidth: 1 },
      { minWidth: 500, gridWidth: 2 },
      { minWidth: 900, gridWidth: 3 },
    ],
    scaleFonts: false,
  },

  blocks: getBlocks()
})
