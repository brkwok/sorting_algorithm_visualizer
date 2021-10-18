export const generateArray = (size) => {
  let arr = [];

  for (let i = 0; i < size; i++) {
    let obj = {};

    obj.val = Math.floor(Math.random() * 100) + 1;
    obj.type = "normal";

    arr.push(obj);
  }

  return arr;
}