const resoponsiveMenu = () => {
  const menuToggle = document.querySelector(".menu-btn");
  const closeToggle = document.querySelector("#close");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((e) => {
    e.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  });

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  closeToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
};

// ***** Calling Functions *****
resoponsiveMenu();

// tl Code\

let tl = gsap.timeline()

gsap.from(".logo", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power3.out",
});

// Navbar links fade-in one by one
gsap.from(".nav-link", {
  opacity: 0,
  y: -30,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out",
});

// Home section content fade-in
gsap.from(".home-section-content", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".home-section",
    start: "top center",
  },
});

// Image slide-in from right in the home section
gsap.from(".home-section-img img", {
  x: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".home-section-img",
    start: "top 80%",
  },
});
