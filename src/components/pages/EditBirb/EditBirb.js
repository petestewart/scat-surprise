import React from 'react';

class EditBirb extends React.Component {
  render() {
    const { birbId } = this.props.match.params;

    return (
      <div className="EditBirb">
        <h2>You are now editing {birbId}</h2>
      </div>
    );
  }
}

export default EditBirb;
