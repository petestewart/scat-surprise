import React from 'react';
import birdsData from '../../../helpers/data/birdsData';

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
    return (
      <h2>SingleBirb</h2>
    );
  }
}

export default SingleBirb;
