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
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">
            شخص مورد نظر را انتخاب کنید
          </label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            onChange={(e) => this.showInfo(e.target.value)}
          >
            <option>انتخاب کنید</option>

            {this.state.familyData.map((data) => (
              <option key={data.id} value={data.id}>
                {data.name}
              </option>
            ))}
          </select>
        </div>
        {this.state.selectedFamily && (
          <div className="col">
            <p>نسبت: {this.state.selectedFamily.rel}</p>
            <p>شهر: {this.state.selectedFamily.city}</p>
            <p>سن: {this.state.selectedFamily.age}</p>
          </div>
        )}
      </form>
    );
  }
}

export default Family;
