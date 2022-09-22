// https://juejin.cn/post/6924918404444848136#heading-12

const imgs = document.querySelectorAll('img') //获取所有待观察的目标元素
var options = {}
function lazyLoad(target) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entrie => {
      if (entrie.isIntersecting) {
        const img = entrie.target;
        const src = img.getAttribute('data-src');
        img.setAttribute('src', src)
        observer.unobserve(img); // 停止监听已开始加载的图片
      }

    })
  }, options);
  observer.observe(target)
}

imgs.forEach(lazyLoad)


