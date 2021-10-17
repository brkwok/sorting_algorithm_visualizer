import { swap } from "../helpers/swap";

export const bubbleSort = async (arr) => {
  let visualizeQueue = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        await swap(arr, j, j + 1);
        visualizeQueue.push([j, j + 1, true]);
        swapped = true;
      } else {
        visualizeQueue.push([j, j + 1, false]);
      }
    }

    if (!swapped) {
      break;
    }
  }

  return visualizeQueue;
};
