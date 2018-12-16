class HelloMessage extends React.Component {
    render() {
      return React.createElement(
        "div",
        null,
        "Hello ",
        this.props.name
      );
    }
  }
  
  const mountNode = document.getElementById("reactMountNode");
  ReactDOM.render(React.createElement(HelloMessage, { name: "Taylor" }), mountNode);