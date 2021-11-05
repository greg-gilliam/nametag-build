import React, { Component } from "react";

export default class NameTag extends Component {
  state = {
    greeting: "Hi, my name is",
    name: "",
  };

  async componentDidMount() {
    this.setState({
      greeting,
      name,
    });
  }

  render() {
    const { greeting, name } = this.state;
    if (greeting) {
      return <h1>Hi, my name is:{name}</h1>;
    }
    return <NameTag />;
  }
}
