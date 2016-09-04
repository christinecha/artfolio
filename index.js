var $body = document.body
var $intro = document.getElementById('intro')
var $center = document.getElementById('center')
var $introH2 = $intro.querySelector('h2')

var isFirstMouseMove = true

function removeTransition(e) {
  $intro.classList.remove('transition-4')
  $intro.removeEventListener('transitionend', removeTransition)
}

function getHexFromMousePos(e) {
  if (isFirstMouseMove) {
    $intro.classList.add('transition-4')
    isFirstMouseMove = false
  } else if ($intro.classList.contains('transition-4')) {
    $intro.addEventListener('transitionend', removeTransition)
  }

  var relativeX = e.pageX / $intro.clientWidth
  var relativeY = (e.pageY - $intro.offsetTop) / $intro.clientHeight

  if (relativeX < 0.51 && relativeX > 0.49 && relativeY < 0.51 && relativeY > 0.49) {
    $center.classList.remove('is-hidden')
  } else {
    $center.classList.add('is-hidden')
  }

  $intro.style.backgroundColor = getProgressiveGray(relativeX)
  $introH2.style.color = getProgressiveGray(relativeY)
}

function getProgressiveGray(n) {
  var r = Math.round(255 * n)
  var g = Math.round(255 * n)
  var b = Math.round(255 * n)
  return 'rgb(' + [r,g,b].join(',') + ')'
}

function handleResize() {
  requestAnimationFrame(function() {
    introRect = $intro.getBoundingClientRect()
    isFirstMouseMove = true
  })
}

/* ADD EVENT LISTENERS */
window.addEventListener('resize', handleResize)

$intro.addEventListener('mousemove', getHexFromMousePos)
$intro.addEventListener('mouseleave', function() { isFirstMouseMove = true })

$intro.addEventListener('touchmove', getHexFromMousePos)
$intro.addEventListener('touchend', function() { isFirstMouseMove = true })

/* RUN, FUNCTIONS, RUN */
