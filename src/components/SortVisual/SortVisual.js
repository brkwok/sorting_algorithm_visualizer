import React from "react";
import Array from "../Array/Array";
import Header from "../Header/Header";

class SortVisual extends React.Component {
  state = {
    algorithm: "bubbleSort",
  };

  setAlgorithm = (e) => {
    e.preventDefault();

    this.setState({
      algorithm: e.target.id,
    });
  };

  render() {
    return (
      <>
        <Header setAlgorithm={this.setAlgorithm} />
        <Array algorithm={this.state.algorithm}/>
      </>
    );
  }
}

export default SortVisual;
