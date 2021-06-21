import React from 'react';

class AddReviewModal extends React.Component {
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
        <form id="review-upload-form"
          encType="multipart/form-data"
          action="/photo-upload"
          method="post">
          <input type="file" name="review-photo" multiple />
          <input type="submit" value="Upload Image" name="submit" />
          <input type='text' id='random' name='random' /><br></br>
          <span id = "status"></span>
        </form>
        {/* <input type="file" name="file" onChange={onChangeFileHandler} />
<button type="button" onClick={onClickUploadHandler}>Upload</button> */}
        <button id='default-modal-close-button' data-testid="example-modal-close-button">Click to hide modal.</button>
      </React.Fragment>
    );
  }
};

export default AddReviewModal;