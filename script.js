(() => {
  // Create the observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelector(".category-grid").classList.add("category-grid-animation");
          entry.target.querySelector(".category-meta").classList.add("category-meta-animation");
        }
      });
    },
    { threshold: 0.3 }
  );

  // Tell the observer which elements to track
  const $categories = document.querySelectorAll(".category");
  $categories.forEach(($category) => {
    observer.observe($category);
  });
})();
