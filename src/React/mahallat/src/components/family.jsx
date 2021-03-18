import React, { Component } from "react";

class Family extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">
            شخص مورد نظر را انتخاب کنید
          </label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            onChange={this.props.handleDropdown}
          >
            <option value="Father">علی امیری</option>
            <option value="Mother">معصومه بنی اسد</option>
            <option value="Sister">مهسا امیری</option>
            <option value="Ahmad">احمد بنی اسد</option>
            <option value="Leyla">لیلا شاهرخی</option>
            <option value="Smain">ثمین بنی اسد</option>
          </select>
        </div>
      </form>
    );
  }
}

export default Family;
