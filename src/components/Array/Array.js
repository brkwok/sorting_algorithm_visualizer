import React from "react";
import { generateArray } from "../../util/generateArray";
import { bubbleSort } from "../../util/algorithms/bubbleSort";
import { selectionSort } from "../../util/algorithms/selectionSort";
import { quickSort } from "../../util/algorithms/quickSort";

import {
  DEFAULT_ARR_SIZE,
  SORTING_SPEED,
  INACTIVE,
  ACTIVE,
  SEARCHING,
} from "../../util/helpers/constants";
import { mergeSort } from "../../util/algorithms/mergeSort";

class Array extends React.Component {
  state = {
    arr: [],
    isSorting: false,
    currAlgo: "Bubble Sort",
  };

  componentDidMount = async () => {
    await this.generateNewArray();
  };

  componentDidUpdate = async (pp, _) => {
    if (pp.algorithm !== this.props.algorithm) {
      let currAlgo = "";
      if (this.props.algorithm === "bubbleSort") {
        currAlgo = "Bubble Sort";
      } else if (this.props.algorithm === "selectionSort") {
        currAlgo = "Selection Sort";
      } else if (this.props.algorithm === "mergeSort") {
        currAlgo = "Merge Sort";
      } else if (this.props.algorithm === "quickSort") {
        currAlgo = "Quick Sort";
      }

      await this.setState({ currAlgo });
    }
  };

  generateNewArray = async () => {
    let newArray = generateArray(DEFAULT_ARR_SIZE);

    await this.setState({ arr: newArray });
  };

  getQueue = async (arr) => {
    let queue = [];

    if (this.props.algorithm === "bubbleSort") {
      queue = await bubbleSort(arr);
    } else if (this.props.algorithm === "selectionSort") {
      queue = await selectionSort(arr);
    } else if (this.props.algorithm === "mergeSort") {
      queue = await mergeSort(arr, 0, arr.length - 1);
    } else if (this.props.algorithm === "quickSort") {
      queue = await quickSort(arr, 0, arr.length - 1);
    }

    return queue;
  };

  visualize = async () => {
    await this.setState({ isSorting: true });
    let arrCopy = this.state.arr.slice();
    let queue = await this.getQueue(arrCopy);

    if (queue.length < 1) {
      return;
    }

    arrCopy = this.state.arr.slice();

    while (queue.length > 0) {
      let curr = queue.shift();
      debugger;
      if (this.props.algorithm === "mergeSort") {
        await this.visualizeQueueRange(curr[0], curr[1], curr[2], arrCopy);
      } else {
        if (curr[2]) {
          await this.visualizeQueueSwap(curr, arrCopy);
        } else {
          await this.visualizeQueueNoneSwap(curr, arrCopy);
        }
      }
    }

    await this.done(this.state.arr);
    await this.setState({ isSorting: false });
  };

  done = async (arr) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].className = "finished";
      await this.updateState(arr);
    }
  };

  visualizeQueueRange = async (idxToChange, val, range, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (i >= range[0] && i <= range[1]) {
        arr[i].className = "active"; 
      } else {
        arr[i].className = "inactive";
      }
    }

    arr[idxToChange].val = val;
    await this.updateState(arr);


    await this.updateState(arr);
  };

  visualizeQueueSwap = async (elementsToSwap, arr) => {
    await this.updateStyle(arr, elementsToSwap, ACTIVE);

    let temp = arr[elementsToSwap[0]].val;
    arr[elementsToSwap[0]].val = arr[elementsToSwap[1]].val;
    arr[elementsToSwap[1]].val = temp;

    await this.updateState(arr);
    await this.updateStyle(arr, elementsToSwap, INACTIVE);
  };

  visualizeQueueNoneSwap = async (elements, arr) => {
    await this.updateStyle(arr, elements, SEARCHING);
    await this.updateState(arr);
    await this.updateStyle(arr, elements, INACTIVE);
  };

  updateState = async (arr) => {
    this.setState({ arr: [...arr] });
    await this.timeOut();
  };

  updateStyle = async (arr, indices, bool) => {
    if (indices[3]) {
      arr[indices[3]].className = await this.getClassType(SEARCHING);
    }
    arr[indices[0]].className = await this.getClassType(bool);
    arr[indices[1]].className = await this.getClassType(bool);

    await this.updateState(arr);
  };

  getClassType = async (type) => {
    if (type === INACTIVE) {
      return "inactive";
    } else if (type === ACTIVE) {
      return "active";
    } else if (type === SEARCHING) {
      return "searching";
    }
  };

  timeOut = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, SORTING_SPEED);
    });
  };

  render() {
    return (
      <section className="chart-container">
        <h1 className="chart-current-algo">{this.state.currAlgo}</h1>
        <div id="array-button-container">
          <button
            disabled={this.state.isSorting}
            id="array-generate"
            onClick={this.generateNewArray}
          >
            Generate New Chart
          </button>
          <button
            disabled={this.state.isSorting}
            id="array-generate"
            onClick={this.visualize}
          >
            Sort
          </button>
        </div>
        <div id="array-container">
          {this.state.arr.map((num, i) => {
            let key = num.val.toString() + " " + i.toString();

            return (
              <div
                id="array-bar"
                className={`bar ${num.className}`}
                key={key}
                style={{
                  height: `${num.val}%`,
                  width: `calc(100vw / ${DEFAULT_ARR_SIZE} - 4px)`,
                }}
              ></div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Array;
