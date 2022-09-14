function hex2rgb(hex) {
  if (typeof hex !== "string") return;
  hex = hex.toLowerCase();
  const reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
  if (hex && reg.test(hex)) {
    // 判断是否是简写
    if (hex.length === 4) {
      let newHex = "#";
      for (let i = 1; i < 4; i++) {
        newHex = newHex + hex[i] + hex[i];
      }
      hex = newHex;
    }

    const arr = [];
    for (let i = 1; i < 7; i += 2) {
      arr.push(parseInt(hex.slice(i, i + 2), 16));
      //   arr.push(parseInt(hex.substr(i, 2), 16));
      //   arr.push(parseInt(hex.substring(i, i + 2), 16));
    }
    console.log(`rgb(${arr.join(",")})`);
    return `rgb(${arr.join(",")})`;
  }
  return hex;
}

hex2rgb("#000000");
hex2rgb("#CC00FF");
