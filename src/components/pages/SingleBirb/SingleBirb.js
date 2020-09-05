import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import birdsData from '../../../helpers/data/birdsData';

import './SingleBirb.scss';

class SingleBirb extends React.Component {
  state = {
    birb: {},
  }

  componentDidMount() {
    const { birbId } = this.props.match.params;
    birdsData.getBird(birbId)
      .then((res) => this.setState({ birb: res.data }))
      .catch((err) => console.error(err));
  }

  render() {
    const { birb } = this.state;

    const date = moment(birb.seenAt).format('MMMM Do YYYY, h:mm:ss a');
    const allBirdsLink = '/home';

    const deleteHandler = () => {
      const { birbId } = this.props.match.params;
      birdsData.deleteBird(birbId)
        .then(() => {
          this.props.history.push(allBirdsLink);
        })
        .catch((err) => console.error(err));
    };

    if (birb.type === 'seahawk') { return <img src="https://thumbs.gfycat.com/WholeDifficultFlies-size_restricted.gif" className="mt-5" style={{ width: '100%' }} alt="BeastMode" />; }

    return (
      <div className="SingleBirb">
        <div className="single-bird-card" style={{ borderColor: birb.color }}>
          <span className="ml-auto"><Link to={allBirdsLink}><i class="fas fa-times-circle"></i></Link></span>
        <i class="fas fa-crow fa-5x" style={{ color: birb.color }}></i>
          <h2>{birb.type}</h2>
          <span><label>color:</label> {birb.color} or {birb.altColor}</span>
          <span><label>size:</label> {birb.size}</span>
          <span><label>seen at:</label> {date}</span>
          <span><label>location:</label> {birb.location}</span>
          <span>was {birb.wasSleeping ? 'asleep' : 'awake'}</span>
          <i class="fas fa-trash-alt" onClick={deleteHandler}></i>
        </div>
      </div>
    );
  }
}

export default SingleBirb;
