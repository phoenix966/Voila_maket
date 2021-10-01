  let hamburger = document.querySelector(".hamburger");
  let mobile = document.querySelector(".mobile");

  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    mobile.classList.toggle('mobile--hide');
  });