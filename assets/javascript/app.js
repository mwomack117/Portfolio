window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.getElementById("scroll").classList.add("scroll-to-top");
  } else {
    document.getElementById("scroll").classList.remove("scroll-to-top");
  }
}

// testing push to github on new pc 