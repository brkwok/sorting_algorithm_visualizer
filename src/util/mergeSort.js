const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid, arr.length));

  return merge(left, right);
};

const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;

  let ans = [];

  while ((i + j) < arr1.length + arr2.length) {
    if (arr1[i] < arr2[j] || arr2[j] === undefined) {
      ans.push(arr1[i]);
      i++; 
    } else {
      ans.push(arr2[j]);
      j++;
    }

    sum = i + j;
  }

  return ans;
};