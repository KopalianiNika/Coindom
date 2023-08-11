"Use Strict";
const sectionHeroEl = document.querySelector("h1");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // IN the viewport
    root: null,
    treshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

const btnNavEL = document.querySelector(".menu");
const headerEL = document.querySelector(".header");

btnNavEL.addEventListener("click", function () {
  headerEL.classList.add("navbar");
});

const btnNavEL1 = document.querySelector(".close");
const headerEL1 = document.querySelector(".header");

btnNavEL1.addEventListener("click", function () {
  headerEL1.classList.remove("navbar");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      console.log(sectionEL);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }

    //Close mobile navigation
    if (link.classList.contains("navigation-a"))
      headerEL.classList.toggle("navbar");
  });
});
