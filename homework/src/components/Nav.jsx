import { Component } from "react";

class Nav extends Component {
  render() {
    return <div className={this.props.classItem}>{this.props.inside}</div>;
  }
}

export default Nav;
