const lazyload = function(delay = 250) {
  const images = document.querySelectorAll("img[data-src]");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const { target } = entry;

          if ("img" === target.tagName.toLowerCase()) {
            const dataSrc = target.getAttribute("data-src");
            setTimeout(() => {
              entry.target.src = dataSrc;
            }, delay);
            observer.unobserve(entry.target);
          }
        }
      });
    },
    { root: null, rootMargin: "0px", threshold: 0 }
  );

  images.forEach(img => {
    observer.observe(img);
  });
};

export default lazyload;
