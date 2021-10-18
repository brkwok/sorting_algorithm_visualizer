import React from "react";
import { generateArray } from "../../util/generateArray";
import { bubbleSort } from "../../util/algorithms/bubbleSort";
import { selectionSort } from "../../util/algorithms/selectionSort";

import { DEFAULT_ARR_SIZE } from "../../util/helpers/constants";

class ArrayContainer extends React.Component {
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

  getQueue = async(arr) => {
    let queue = [];

    if (this.props.algorithm === "bubbleSort") {
      queue = await bubbleSort(arr);
    } else if (this.props.algorithm === "selectionSort") {
      queue = await selectionSort(arr);
    } else if (this.props.algorithm === "mergeSort") {
      queue = await bubbleSort(arr);
    } else if (this.props.algorithm === "quickSort") {
      queue = await bubbleSort(arr);
    }

    return queue;
  }

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

      if (curr[2]) {
        await this.visualizeQueueSwap(curr, arrCopy);
      } else {
         await this.visualizeQueueNoneSwap(curr, arrCopy);
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

  visualizeQueueSwap = async (elementsToSwap, arr) => {
    await this.updateStyle(arr, elementsToSwap, 1);
    let temp = arr[elementsToSwap[0]].val;
    arr[elementsToSwap[0]].val = arr[elementsToSwap[1]].val;
    arr[elementsToSwap[1]].val = temp;

    await this.updateState(arr);
    await this.updateStyle(arr, elementsToSwap, 0);
  };

  visualizeQueueNoneSwap = async (elements, arr) => {
    await this.updateStyle(arr, elements, 2);
    await this.updateState(arr);
    await this.updateStyle(arr, elements, 0);
  }

  updateState = async (arr) => {
    this.setState({ arr: [...arr] });
    await this.timeOut();
  };

  updateStyle = async (arr, indices, bool) => {
    arr[indices[0]].className = await this.getClassType(bool);
    arr[indices[1]].className = await this.getClassType(bool);

    await this.updateState(arr);
  };

  getClassType = async (type) => {
    if (type === 0) {
      return "inactive";
    } else if (type === 1) {
      return "active";
    } else if (type === 2) {
      return "searching";
    } else {
      return "finished";
    }
  };

  timeOut = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 10);
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
                  height: `${(num.val / 200) * 150}%`,
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

export default ArrayContainer;
