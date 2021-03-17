import React, { Component } from "react";

class Family extends Component {
  render() {
    return (
      <form onSubmit={this.state.handleSubmit} className="float-right">
        <label>
          :شخص مورد نظر را انتخاب کنید
          <select value={this.state.value} onChange={this.handleDropdown}>
            <option value="Ali">علی امیری</option>
            <option value="Masume">معصومه بنی اسد</option>
            <option value="Mahsa">مهسا امیری</option>
            <option value="Ahmad">احمد بنی اسد</option>
            <option value="Leyla">لیلا شاهرخی</option>
            <option value="Smain">ثمین بنی اسد</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Family;
