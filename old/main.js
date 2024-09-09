function setClasses(el) {
  const isScrollable = el.scrollHeight > el.clientHeight;

  // GUARD: If element is not scrollable, remove all classes
  if (!isScrollable) {
    el.classList.remove("is-bottom-overflowing", "is-top-overflowing");
    return;
  }

  // Otherwise, the element is overflowing!
  // Now we just need to find out which direction it is overflowing to (can be both).
  // One pixel is added to the height to account for non-integer heights.
  const isScrolledToBottom =
    el.scrollHeight < el.clientHeight + el.scrollTop + 1;
  const isScrolledToTop = isScrolledToBottom ? false : el.scrollTop === 0;
  el.classList.toggle("is-bottom-overflowing", !isScrolledToBottom);
  el.classList.toggle("is-top-overflowing", !isScrolledToTop);
}

document.querySelector(".right").addEventListener("scroll", (e) => {
  const el = e.currentTarget;
  setClasses(el);
});

setClasses(document.querySelector(".right"));
