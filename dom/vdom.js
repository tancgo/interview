// 提供一个vdom对象，写一个render函数变成dom树

const obj = {
  type: "h1",
  props: { className: "", style: "" },
  children: [],
};

// 增加对 onXXX 事件的处理
const render = (vnode, container) => {
  if (vnode.type === "text") {
    const textNode = document.createTextNode(vnode.value);
    return container.appendChild(textNode);
  }

  const dom = document.createElement(vnode.type);

  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key];
      if (key === "classNmae") {
        dom.setAttribute("class", value);
      }

      if (key === "style") {
        dom.setAttribute(key, value);
      }

      if (/on\w+/.test(key)) {
        dom[key.toLowerCase()] = value;
      }
    }
  }

  vnode.children.length &&
    vnode.children.forEach((node) => {
      return render(node, dom);
    });

  return container.appendChild(dom);
};
