import React from 'react';

var ModalDefaultContents = function(props) {
  return (
    <React.Fragment>
      <ol>
        <li>Move these contents to the modal default.</li>
        <li>Make then show when the modal's "contents" state is null or undefined</li>
        <li>Make a method to set the modal's contents state</li>
        <li>Make the modal render its contents component when it's not null or undefined.</li>
      </ol>
      <button id='default-modal-close-button'>Click to hide modal.</button>
    </React.Fragment>
  );
};

export default ModalDefaultContents;