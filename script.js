// Dark mode toggle
// =======================
// DARK MODE
// =======================
const darkToggle = document.getElementById("darkToggle");

darkToggle.onclick = () => {
  document.body.classList.toggle("dark");
};

// =======================
// POPUP ANIMATION
// =======================
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

  sections.forEach(section => {

    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){
      section.classList.add("show");
    }

  });

});
