import React from "react";

class WithReact extends React.Component {
  render() {
    return (
      <div>
        <p>My Fav Color Red</p>
        <MyClassProp data={"yellow"} />
      </div>
    );
  }
}

class MyClassProp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }
  static getDerivedStateFromProps(props, state) {
      console.log(props);
      console.log(state);
    return { color: props.data };
  }
  render() {
    return <div style={{ color: `${this.state.color}` }}>Hello World</div>;
  }
}

export default WithReact;
