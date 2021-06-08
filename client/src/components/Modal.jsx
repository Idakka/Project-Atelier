import React from 'react';

var Modal = function(props) {
  console.log('props.contents: ', props.contents)
  return (
    <div className="modal" id="the_modal">
      {props.contents}
    </div>
  );
};

export default Modal;