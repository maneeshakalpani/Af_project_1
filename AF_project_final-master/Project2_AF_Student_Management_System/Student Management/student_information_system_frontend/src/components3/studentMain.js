import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentView from './StudentView';
import StudentUpdate from './StudentUpdate'

class studentMain extends Component {
    render() {
        return (<div>
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
                            {/*<img src={logo} width="30" height="30" alt="CodingTheSmartWay.com"/>*/}
                        </a>
                        <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/updateStudent" className="nav-link">updateStudent</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/updateStudent" className="nav-link">updateStudent Todo</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <br/>

                <Route path="/" exact component={StudentView} />
                <Route path="/updateStudent" component={StudentUpdate} />
                </div>
            </Router>
        </div>
        );
    }
}

export default studentMain;