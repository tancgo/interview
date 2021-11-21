const isInViewport = (dom) => {
  const height = window.innerHeight;
  const width = window.innerWidth;
  const { top, left, right, bottom } = dom.getBoundingClientRect();

  return top >= 0 && left >= 0 && bottom <= height && right <= width;
};

// IntersectionObserver
const dom = document.getElementsByClassName("avatar")[0];
function isInViewport(dom) {
  const observer = new IntersectionObserver((entry) => {
    // entry 为观察的dom数组，此处只观察了一个
    console.log(entry[0].isIntersecting);
  });
  observer.observe(dom);
}
isInViewport(dom);
