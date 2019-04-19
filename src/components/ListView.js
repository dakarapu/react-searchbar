import React from "react";
import ReactDOM from "react-dom";

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createList = this.createList.bind(this);
  }

  createList(list) {
    if (list.length > 0) {
      list.map((v, i) => {
        console.log("listView:", v.urls.regular);
        return v.urls.regular;
      });
    } else {
      return null;
    }
  }

  render() {
    return (
      <ul>
        <li>{this.createList(this.props.list)}</li>
      </ul>
    );
  }
}

export default ListView;
