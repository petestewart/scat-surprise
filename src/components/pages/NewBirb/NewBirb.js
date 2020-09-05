import React from 'react';
import DatePicker from 'react-datepicker';
import _ from 'underscore';

import authData from '../../../helpers/data/authData';

import 'react-datepicker/dist/react-datepicker.css';
import birdsData from '../../../helpers/data/birdsData';

class NewBirb extends React.Component {
  state = {
    type: '',
    color: '',
    size: '',
    seenAt: new Date(),
    altColor: '',
    wasSleeping: true,
    location: '',
    notes: '',
  }

  changeTypeEvent = (e) => {
    this.setState({ [e.target.getAttribute('name')]: e.target.value });
  };

  seenAtEvent = (seenAt) => {
    this.setState({ seenAt });
  };

  saveBirb = (e) => {
    e.preventDefault();
    const keysIWant = [
      'type',
      'color',
      'size',
      'seenAt',
      'altColor',
      'wasSleeping',
      'location',
      'notes',
    ];
    const newBirb = _.pick(this.state, keysIWant);
    newBirb.uid = authData.getUid();

    birdsData.createBird(newBirb)
      .then((res) => {
        this.props.history.push(`/birbs/${res.data.name}`);
      })
      .catch((err) => console.error(err));
  };

  render() {
    const {
      type, color, size, altColor, location, notes, seenAt,
    } = this.state;

    return (
    <div className="NewBirb">
      <h1>New Bird</h1>
      <form action="">
      <div className="form-group">
        <label htmlFor="birbType">Type</label>
        <input
         type="text"
         name="type"
         className="form-control"
         id="birbType"
         placeholder="Type"
         value={type}
         onChange={this.changeTypeEvent}
         />
      </div>
      <div className="form-group">
        <label htmlFor="birbColor">Color</label>
        <input
         type="text"
         name="color"
         className="form-control"
         id="birbColor"
         placeholder="Color"
         value={color}
         onChange={this.changeTypeEvent}
         />
      </div>
      <div className="form-group">
        <label htmlFor="birbSize">Size</label>
        <input
         type="text"
         name="size"
         className="form-control"
         id="birbSize"
         placeholder="Size"
         value={size}
         onChange={this.changeTypeEvent}
         />
      </div>
      <div className="form-group">
        <label htmlFor="birbAltColor">Alt Color</label>
        <input
         type="text"
         name="altColor"
         className="form-control"
         id="birbAltColor"
         placeholder="AltColor"
         value={altColor}
         onChange={this.changeTypeEvent}
         />
      </div>
      <div className="form-group">
        <label htmlFor="birbLocation">Location</label>
        <input
         type="text"
         name="location"
         className="form-control"
         id="birbLocation"
         placeholder="Location"
         value={location}
         onChange={this.changeTypeEvent}
         />
      </div>
      <div className="form-check">
        <input
         type="radio"
         className="form-check-input"
         id="birbWasAwake"
         name="isAsleep"
         value={true}
         onChange={this.changeTypeEvent}
         />
         <label htmlFor="birbWasAwake">Was Awake</label>
      </div>
      <div className="form-check">
         <input
         type="radio"
         className="form-check-input"
         id="birbWasAsleep"
         name="isAsleep"
         value={false}
         onChange={this.changeTypeEvent}
         />
         <label htmlFor="birbWasAsleep">Was Asleep</label>
      </div>
      <div className="form-group">
        <label htmlFor="birbNotes">Notes</label>
        <input
         type="text"
         name="notes"
         className="form-control"
         id="birbNotes"
         placeholder="Notes"
         value={notes}
         onChange={this.changeTypeEvent}
         />
      </div>
      <div className="form-group">
        <label htmlFor="birbSeenAt"></label>
        <DatePicker
          selected={seenAt}
          onChange={this.seenAtEvent}
          showTimeSelect
        />
      </div>
      <button onClick={this.saveBirb}>Save Bird</button>
      </form>
    </div>
    );
  }
}

export default NewBirb;
