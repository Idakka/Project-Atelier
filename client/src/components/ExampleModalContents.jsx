import React from 'react';

class ExampleModalContents extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    document.getElementById('default-modal-close-button').addEventListener('click', (event) => {
      this.props.top.hideModal();
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Example Modal Window</h1>
        <button id='default-modal-close-button' data-testid="example-modal-close-button">Click to hide modal.</button>
      </React.Fragment>
    );
  }
};

export default ExampleModalContents;