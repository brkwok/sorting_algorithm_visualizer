import { swap } from "../helpers/swap";

export const quickSort = async (arr, lo, hi, visualizeQueue = []) => {
  if (lo < hi) {
    let partIdx = await partition(arr, lo, hi, visualizeQueue);

    quickSort(arr, lo, partIdx - 1, visualizeQueue);
    quickSort(arr, partIdx + 1, hi, visualizeQueue);
  }

  return visualizeQueue;
};

const partition = async (arr, lo, hi, visualizeQueue) => {
  let pivot = arr[hi].val;

  let i = lo - 1;

  for (let j = lo; j < hi; j++) {
    if (arr[j].val <= pivot) {
      i++;

      await swap(arr, i, j, true);
      visualizeQueue.push([i, j, true, hi]);
    }
  }

  await swap(arr, i + 1, hi);
  visualizeQueue.push([i + 1, hi, true, i + 1]);

  return i + 1;
};
