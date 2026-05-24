/* =========================
   DARK MODE TOGGLE
========================= */

const darkBtn = document.getElementById("darkToggle");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Change icon
  if(document.body.classList.contains("dark")){
    darkBtn.innerHTML = "☀️";
  } else {
    darkBtn.innerHTML = "🌙";
  }
});

/* =========================
   IMAGE POPUP FUNCTION
========================= */

const images = document.querySelectorAll(".gallery img");

const popup = document.createElement("div");
popup.classList.add("popup");

const popupImg = document.createElement("img");

popup.appendChild(popupImg);
document.body.appendChild(popup);

images.forEach((img) => {

  img.addEventListener("click", () => {
    popup.classList.add("active");
    popupImg.src = img.src;
  });

});

/* CLOSE POPUP */

popup.addEventListener("click", () => {
  popup.classList.remove("active");
});

/* =========================
   SCROLL ANIMATION
========================= */

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

  sections.forEach((section) => {

    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }

  });

});

/* INITIAL STYLE */

sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "0.7s ease";
});
