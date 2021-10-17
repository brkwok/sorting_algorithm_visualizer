import React from "react";
import { generateArray } from "../../util/generateArray";

class ArrayContainer extends React.Component {
  state = {
    arr: [],
    arrSize: 100,
  };

  componentDidMount = () => {
    this.generateNewArray();
  };

  generateNewArray = () => {
    let newArray = generateArray(this.state.arrSize);

    this.setState({ arr: newArray });
  };

  render() {
    return (
      <section className="chart-container">
        <button onClick={this.generateNewArray}>Generate New Chart</button>
        <div id="array-container">
          {this.state.arr.map((num, i) => {
            let key = num.toString() + " " + i.toString();

            return (
              <div
                id="array-bar"
                key={key}
                style={{
                  height: `${(num / 200) * 150}%`,
                  width: `calc(100vw / ${this.state.arrSize} - 4px)`,
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
