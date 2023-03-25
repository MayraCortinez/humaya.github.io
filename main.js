const myCarouselElement = document.querySelector('#carouselExampleFade')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 500,
  touch: false
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").classList.remove("hide");
  } else {
    document.getElementById("header").classList.add("hide");
  }
  prevScrollpos = currentScrollPos;
}

