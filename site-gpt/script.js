const links = document.querySelectorAll("[data-section]");
const pages = document.querySelectorAll(".page");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = link.getAttribute("data-section");
    const inspoTarget = link.getAttribute("data-target");

    pages.forEach(page => page.classList.remove("active"));
    document.getElementById(target).classList.add("active");

    if (inspoTarget) {
      setTimeout(() => {
        document.getElementById(inspoTarget).scrollIntoView({
          behavior: "smooth"
        });
      }, 200);
    }
  });
});

