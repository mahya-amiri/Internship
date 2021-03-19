import React, { Component } from "react";
import Family from "./components/family";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <nav className="row navbar bg-secondary">
          <div className="col container-md text-center text-white">
            <span className="navbar-brand mb-3 h1">محلات، شهر شعر و ادب</span>
          </div>
        </nav>
        <hr></hr>
        <br></br>
        <Family></Family>
        <img src="family.jpg" className="img-fluid"></img>
      </main>
      <footer className="fixed-bottom bg-secondary">
        <div className="containere text-right mr-3">
          <div className="row">
            <div className="col">
              <span className="text-white">
                توسعه داده شده توسط شرکت فیوسافت ©
              </span>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
