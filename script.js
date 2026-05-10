const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".section, .card, .impact-card, .timeline article").forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});
