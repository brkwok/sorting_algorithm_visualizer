import React from "react";

export default function Dropdown({ setAlgorithm }) {
  return (
    <div id="header-dropdown-fields" className="header-dropdown-fields">
      <div id="header-dropdown-algo-list">
        <div onClick={(e) => setAlgorithm(e)} id="bubbleSort">
          Bubble Sort
        </div>
        <div onClick={(e) => setAlgorithm(e)} id="selectionSort">
          Selection Sort
        </div>
        <div onClick={(e) => setAlgorithm(e)} id="quickSort">
          Quick Sort
        </div>
        <div onClick={(e) => setAlgorithm(e)} id="mergeSort">
          Merge Sort
        </div>
      </div>
    </div>
  );
}
