import { swap } from "../helpers/swap";

export const selectionSort = async (arr) => {
  let visualizeQueue = [];

  for (let i = 0; i < arr.length  - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx].val > arr[j].val) {
        minIdx = j;
      } 
      visualizeQueue.push([i, j, false]);
    }
    
    await swap(arr, minIdx, i);
    visualizeQueue.push([minIdx, i, true]);
    
  }

  return visualizeQueue;
}