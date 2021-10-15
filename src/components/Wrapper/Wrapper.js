import React from "react";
import ArrayContainer from "../Array/ArrayContainer";
import Header from "../Header/Header";

class Wrapper extends React.Component {
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
    console.log(this.state.algorithm);
    return (
      <>
        <Header setAlgorithm={this.setAlgorithm} />
        <ArrayContainer />
      </>
    );
  }
}

export default Wrapper;
