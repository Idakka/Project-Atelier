import React from 'react';

var Modal = function(props) {
  return (
    <div className="modal">
      <h1>I'm inside a modal!</h1>
      <span>Look at me!!!</span>
      <ol>
        <li>make a button on the parent page</li>
        <li>make an x button on this page</li>
        <li>clicking the parent page button fires a function named "showModal"</li>
        <li>clicking the x-button fires a function called "stowModal"</li>
        <li>showModal adds the modal to the dom and disables the show button</li>
        <li>stowModal removes the modal from the dom and re-enables the show button</li>
      </ol>
    </div>
  );
};

export default Modal;