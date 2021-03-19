import React, { Component } from "react";
import axios from "axios";

class Family extends Component {
  state = {
    familyData: [],
    selectedFamily: null,
  };

  componentDidMount() {
    axios.get("../family.json").then(
      (result) => {
        this.setState({ familyData: result.data });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  showInfo = (id) => {
    const family = this.state.familyData.filter((d) => d.id == id)[0];
    this.setState({ selectedFamily: family });
  };

  render() {
    return (
      <form className="text-right">
        <div className="form-group">
          <label for="exampleFormControlInput1">
            .یکی از اسامی زیر را انتخاب کنید تا نسبت، شهر محل سکونت و سن فرد
            برای شما نمایش داده شود
          </label>
          <select
            className="form-control text-right"
            onChange={(e) => this.showInfo(e.target.value)}
          >
            <option value="" hidden>
              :شخص مورد نظر را انتخاب کنید
            </option>

            {this.state.familyData.map((data) => (
              <option key={data.id} value={data.id}>
                {data.name}
              </option>
            ))}
          </select>
        </div>
        {this.state.selectedFamily && (
          <table className="table">
            <thead>
              <tr className="row">
                <th className="col">نسبت</th>
                <th className="col">شهر محل سکونت</th>
                <th className="col">سن</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row">
                <td className="col">{this.state.selectedFamily.rel}</td>
                <td className="col">{this.state.selectedFamily.city}</td>
                <td className="col">{this.state.selectedFamily.age}</td>
              </tr>
            </tbody>
          </table>
        )}
      </form>
    );
  }
}

export default Family;
