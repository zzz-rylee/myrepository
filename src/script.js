// back to top
let backToTop = document.getElementById("back-to-top");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
      backToTop.classList.remove("hidden");
    } else {
      backToTop.classList.add("hidden");
    }
  });

  backToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });