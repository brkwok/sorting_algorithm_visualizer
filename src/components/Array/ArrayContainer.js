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

  generateNewArray = async () => {
    let newArray = generateArray(ARR_SIZE);

    await this.setState({ arr: newArray });
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

    this.done(this.state.arr);
  };

  done = async (arr) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].className = "finished";
      await this.updateState(arr);
    }
  }

  visualizeQueue = async (elementsToSwap) => {
    let copy = this.state.arr.slice();

    await this.updateStyle(copy, elementsToSwap, 1);
    let temp = copy[elementsToSwap[0]].val;
    copy[elementsToSwap[0]].val = copy[elementsToSwap[1]].val;
    copy[elementsToSwap[1]].val = temp;

    await this.updateState(copy);
    await this.updateStyle(copy, elementsToSwap, 0);
  };

  updateState = async (arr) => {
    this.setState({arr: [...arr]});
    await this.timeOut();
  };

  updateStyle = async(arr, indices, bool) => {
    arr[indices[0]].className = bool ? "active" : "inactive";
    arr[indices[1]].className = bool ? "active" : "inactive";

    await this.updateState(arr);
  }

  getClassType = async(type) => {
    if (type === 1) {
      return "active";
    } else if (type === 2) {
      return "inactive";
    } else {
      return "finished";
    }
  }

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
          Sort
        </button>
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
