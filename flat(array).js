function flatten(arr, depth = 1) {
  return depth > 0
    ? arr.reduce(
        (acc, item) =>
          acc.concat(item instanceof Array ? flatten(item, depth - 1) : item),
        []
      )
    : [...arr];
}

console.log(flatten([1, 2, [1, [2, 3, [4, 5, [6]]]]], Infinity));

function flat(arr, depth = 1) {
  while (arr.some((item) => Array.isArray(item)) && depth > 0) {
    arr = [].concat(arr);
    depth--;
  }

  return arr;
}

console.log(flatten([1, 2, [1, [2, 3, [4, 5, [6]]]]]));
console.log(flatten([1, 2, [1, [2, 3, [4, 5, [6]]]]], 2));
