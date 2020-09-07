import React, { useState, useEffect } from 'react';

import DatePicker from 'react-datepicker';

import birdsData from '../../../helpers/data/birdsData';
import authData from '../../../helpers/data/authData';

const EditBirb = (props) => {
  const birdId = props.match.params.birbId;

  const [bird, setBird] = useState({
    type: '',
    color: '',
    size: '',
    wasSleeping: true,
    location: '',
    notes: '',
  });

  useEffect(() => {
    birdsData.getBird(birdId)
      .then(({ data }) => {
        const bord = data;
        bord.seenAt = new Date(bord.seenAt);
        setBird({ ...bord });
      })
      .catch((err) => console.error(err));
  }, [birdId]);

  const changeTypeEvent = (e) => {
    const birdCopy = { ...bird };
    birdCopy.type = e.target.value;
    setBird(birdCopy);
  };

  const changeValueEvent = (e) => {
    const birdCopy = { ...bird };
    const key = e.target.name;
    birdCopy[key] = e.target.value;
    setBird(birdCopy);
  };

  const seenAtEvent = (seenAt) => {
    const birdCopy = { ...bird };
    birdCopy.seenAt = seenAt;
    setBird(birdCopy);
  };

  const saveBirb = (e) => {
    e.preventDefault();
    const editedBird = { ...bird };
    editedBird.uid = authData.getUid();
    birdsData.updateBird(birdId, editedBird)
      .then((res) => {
        props.history.push((`/birbs/${birdId}`));
      })
      .catch((err) => console.error(err));
  };

  return (
      <div className="BirdForm">
        <h1>Bird Form</h1>
        <form action="">
        <div className="form-group">
          <label htmlFor="birbType">Type</label>
          <input
           type="text"
           name="type"
           className="form-control"
           id="birbType"
           value={bird.type}
           onChange={changeTypeEvent}
           />
        </div>
        <div className="form-group">
          <label htmlFor="birbColor">Color</label>
          <input
           type="text"
           name="color"
           className="form-control"
           id="birbColor"
           value={bird.color}
           onChange={changeValueEvent}
           />
        </div>
        <div className="form-group">
          <label htmlFor="birbSize">Size</label>
          <input
           type="text"
           name="size"
           className="form-control"
           id="birbSize"
           value={bird.size}
           onChange={changeValueEvent}
           />
        </div>
        <div className="form-group">
          <label htmlFor="birbAltColor">Alt Color</label>
          <input
           type="text"
           name="altColor"
           className="form-control"
           id="birbAltColor"
           value={bird.altColor}
           onChange={changeValueEvent}
           />
        </div>
        <div className="form-group">
          <label htmlFor="birbLocation">Location</label>
          <input
           type="text"
           name="location"
           className="form-control"
           id="birbLocation"
           value={bird.location}
           onChange={changeValueEvent}
           />
        </div>
        <div className="form-check">
          <input
           type="radio"
           className="form-check-input"
           id="birbWasAwake"
           name="isAsleep"
           value={true}
           onChange={changeValueEvent}
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
           onChange={changeValueEvent}
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
           value={bird.notes}
           onChange={changeValueEvent}
           />
        </div>
        <div className="form-group">
          <label htmlFor="birbSeenAt">Seen At</label>
          <DatePicker
            selected={bird.seenAt}
            onChange={seenAtEvent}
            showTimeSelect
          />
        </div>
        <button onClick={saveBirb}>Save Bird</button>
        </form>
      </div>
  );
};

export default EditBirb;
