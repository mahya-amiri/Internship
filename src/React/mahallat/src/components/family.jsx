import React, { Component } from "react";

class Family extends Component {
  state = {
    open: false,
  };
  handleDropdown = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };
  render() {
    return (
      //   <React.Fragment>
      //   <div className="App">
      <div className="container">
        <button
          onClick={() => this.handleDropdown}
          className="btn btn-primary btn-sm"
        >
          ☰
        </button>
        {this.state.open && (
          <div className="dropdown">
            <ul>
              <li>علی امیری</li>
              <li>معصومه بنی اسد</li>
              <li>مهسا امیری</li>
              <li>احمد بنی اسد</li>
              <li>لیلا شاهرخی</li>
              <li>ثمین بنی اسد</li>
            </ul>
          </div>
        )}
      </div>
      //   </div>

      //   </React.Fragment>
    );
  }
}

export default Family;
