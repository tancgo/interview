
const jsonp = (url, params, cb) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    params = { ...params, cb: cb };
    const arr = Object.keys(params).map((key) => `${key}=${params[key]}`);
    script.src = `${url}?${arr.join("&")}`;
    document.body.appendChild(script);
    //后端会返回一个字符串给前端，  cb('我今年18岁')

    //全局声明一个方法，方法名为cb
    window[cb] = (data) => {
      resolve(data);
    };
  });
};

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  jsonp("http://localhost:3000", { name: "蜗牛", age: 18 }, "callback").then(
    (res) => {
      console.log(res);
    }
  );
});
