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
        <Family></Family>
      </main>
      <footer className="fixed-bottom bg-secondary text-right">
        <div className="container p-2">
          <div className="row">
            <div className="col">
              <span className="text-white">توسعه داده توسط شرکت فیوسافت ©</span>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
