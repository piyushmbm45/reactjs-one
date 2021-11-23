import React from "react";

class Simple extends React.Component {
  constructor(props){
    super(props);
    this.state = {count: 0};
  }
  render() {
    return (
      <>
        <div>
          <h1>Class Component with State</h1>;
          <button onClick={()=>this.setState({count: this.state.count+1})}>increase</button>
          <p>{this.state.count}</p>
        </div>
      </>
    );
  }
}

export default Simple;
