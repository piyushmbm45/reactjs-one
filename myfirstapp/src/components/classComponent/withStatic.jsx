import React from "react";

const bio = { fName: "piyush", lName: "jain" };

class WithReact extends React.Component {
  render() {
    return (
      <div>
        <p>My Fav Color Red</p>
        <MyClassProp data={"yellow"} bio={bio} />
      </div>
    );
  }
}

class MyClassProp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" , bioN: {}};
  }
  static getDerivedStateFromProps(props, state) {
    console.log(props);
    console.log(state);
    return { color: props.data , bioN: props.bio};
  }
  render() {
    return <div style={{ color: `${this.state.color}` }}>Hello World {this.state.bioN.fName} {this.state.bioN.lName}</div>;
  }
}

export default WithReact;
