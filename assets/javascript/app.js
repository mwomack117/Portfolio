window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.getElementById("scroll").style.display = "block";
  } else {
    document.getElementById("scroll").style.display = "none";
  }
}
