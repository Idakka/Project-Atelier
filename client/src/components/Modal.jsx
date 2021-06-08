import React from 'react';

var Modal = function(props) {
  return (
    <div className="modal" id="the_modal">
      {props.contents}
    </div>
  );
};

export default Modal;