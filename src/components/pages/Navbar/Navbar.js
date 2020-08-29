import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class Navbar extends React.Component {
  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  render() {
    return (
      <div className="Navbar">
        <h1>Navbar</h1>
        <button className="btn btn-danger" onClick={this.logMeIOut}>Logout</button>
      </div>
    );
  }
}

export default Navbar;
