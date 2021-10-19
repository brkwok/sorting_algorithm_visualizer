export const mergeSort = (arr, left, right, visualizeQueue = []) => {
  if (left >= right) {
    return;
  }

  // prevent overflow
  let mid = left + parseInt((right - left) / 2);

  mergeSort(arr, left, mid, visualizeQueue);
  mergeSort(arr, mid + 1, right, visualizeQueue);
  merge(arr, left, mid, right, visualizeQueue);

  return visualizeQueue;
};

const merge = (arr, left, mid, right, visualizeQueue) => {
  const size1 = mid - left + 1;
  const size2 = right - mid;

  let tempLeft = new Array(size1);
  let tempRight = new Array(size2);

  for (let i = 0; i < size1; i++) {
    tempLeft[i] = arr[left + i];
  }

  for (let i = 0; i < size2; i++) {
    tempRight[i] = arr[mid + i + 1];
  }

  let leftArrPointer = 0;
  let rightArrPointer = 0;
  let mergedPointer = left;

  while (leftArrPointer < size1 && rightArrPointer < size2) {
    if (tempLeft[leftArrPointer].val <= tempRight[rightArrPointer].val) {
      visualizeQueue.push([mergedPointer, tempLeft[leftArrPointer].val, [left, right]])
      arr[mergedPointer] = tempLeft[leftArrPointer];
      leftArrPointer++;
    } else {
      visualizeQueue.push([mergedPointer, tempRight[rightArrPointer].val, [left, right]])
      arr[mergedPointer] = tempRight[rightArrPointer];
      rightArrPointer++;
    }
    mergedPointer++;
  }

  while (leftArrPointer < size1) {
    visualizeQueue.push([mergedPointer, tempLeft[leftArrPointer].val, [left, right]])
    arr[mergedPointer] = tempLeft[leftArrPointer];
    leftArrPointer++;
    mergedPointer++;
  }

  while (rightArrPointer < size2) {
    visualizeQueue.push([mergedPointer, tempRight[rightArrPointer].val, [left, right]])
    arr[mergedPointer] = tempRight[rightArrPointer];
    rightArrPointer++;
    mergedPointer++;
  }
};
