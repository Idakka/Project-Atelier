import React from 'react';
import ModalDefaultContents from './ModalDefaultContents.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: <ModalDefaultContents />
    };
  };

  componentDidMount() {
    document.getElementById('default-modal-close-button').addEventListener('click', () => {
      this.props.top.hideModal();
    });
  };

  render() {
    if (this.state.contents === null || this.state.contents === undefined) {
      return (
        <div className="modal" id="the_modal">
          <ModalDefaultContents />
        </div>
      );
    } else {
      return (
        <div className="modal" id="the_modal">
          {this.state.contents}
        </div>
      );
    }
  };
};

export default Modal;