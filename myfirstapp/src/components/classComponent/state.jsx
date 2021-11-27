import React from "react";

export default class StateUse extends React.Component {
  state = { count: 0 };
  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
      </div>
    );
  }
}
