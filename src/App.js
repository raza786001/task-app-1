import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import rotateAction from "./actions/rotateAction";

import Users from './Users';
import Categories from './Categories';

class App extends Component {

  render() {
    return (
      <Router>
      <div>
         <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/home" element={<Home />} />  
        <Route path="/categories" element={<Categories />} />  
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      </div>
    </Router>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  rotateAction: (payload) => dispatch(rotateAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function ContactUs() {
  return <h2>Contact Us</h2>;
}
