  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  // get ALL links inside nav
  const links = navLinks.querySelectorAll("a");

  // toggle menu
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // ✅ close menu when ANY link is clicked
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });