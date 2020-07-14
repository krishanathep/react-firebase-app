import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-3">
              <Link to="/repairs">
                <div className="card-counter info">
                  <i className="fa fa-tools"></i>
                  <span className="count-numbers">12</span>
                  <span className="count-name">REPAIR JOB</span>
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/equipments">
                <div className="card-counter primary">
                  <i className="fas fa-desktop"></i>
                  <span className="count-numbers">80</span>
                  <span className="count-name">EQUIPMENT</span>
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/repairs">
                <div className="card-counter success">
                  <i className="fa fa-users"></i>
                  <span className="count-numbers">50</span>
                  <span className="count-name">USERS</span>
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/repairs">
                <div className="card-counter danger">
                  <i className="far fa-bell"></i>
                  <span className="count-numbers">23</span>
                  <span className="count-name">NONTIFICATION</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;