

if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
  ) {
  let observer = new IntersectionObserver(entries => {
    if (entries[0].boundingClientRect.y < 0) {
      document.body.classList.add("logo-not-top");
    } else {
      document.body.classList.remove("logo-not-top");
    }
  });
  observer.observe(document.querySelector("#logo-anchor"));
  }