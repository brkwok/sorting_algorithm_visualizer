import React from "react";
import { generateArray } from "../../util/generateArray";
import { bubbleSort } from "../../util/algorithms/bubbleSort";

const ARR_SIZE = 30;

class ArrayContainer extends React.Component {
  state = {
    arr: [],
  };

  componentDidMount = () => {
    this.generateNewArray();
  };

  generateNewArray = () => {
    let newArray = generateArray(ARR_SIZE);

    this.setState({ arr: newArray });
  };

  visualize = async () => {
    let arrCopy = this.state.arr.slice();
    let queue = await bubbleSort(arrCopy);

    if (queue.length < 1) {
      return;
    }
    while (queue.length > 0) {
      let curr = queue.shift();

      if (curr[2]) {
        await this.visualizeQueue(curr);
      }
    }
  };

  visualizeQueue = async (elementsToSwap) => {
    let copy = this.state.arr.slice();

    let temp = copy[elementsToSwap[0]];
    copy[elementsToSwap[0]] = copy[elementsToSwap[1]];
    copy[elementsToSwap[1]] = temp;

    await this.updateState(copy);
  };

  updateState = async (arr) => {
    this.setState({ arr });
    await this.timeOut();
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
        <button id="array-generate" onClick={this.generateNewArray}>
          Generate New Chart
        </button>
        <button id="array-generate" onClick={this.visualize}>
          Generate New Chart
        </button>
        <div id="array-container">
          {this.state.arr.map((num, i) => {
            let key = num.toString() + " " + i.toString();

            return (
              <div
                id="array-bar"
                key={key}
                style={{
                  height: `${(num / 200) * 150}%`,
                  width: `calc(100vw / ${ARR_SIZE} - 4px)`,
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
