import React, { Component } from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  myInput = React.createRef();

  gotoStore = e => {
    e.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`)
  };

  render() {
    return (
      <form onSubmit={this.gotoStore} className="store-selector">
        <h2>Please Enter a Store</h2>
        <input
          ref={this.myInput}
          type="text"
          placeholder="Store name"
          required
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}
export default StorePicker;
