// script.js

// ================= DARK MODE =================

const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.onclick = () => {
  document.body.classList.toggle("dark");

  // Change icon
  if(document.body.classList.contains("dark")){
    toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
  else{
    toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
};

// ================= POPUP ANIMATION =================

const sections = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {

  sections.forEach(section => {

    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){
      section.classList.add("show");
    }

  });

});
