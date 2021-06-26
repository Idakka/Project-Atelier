import React from 'react';
import ReviewThumbnailContainer from './ReviewThumbnailContainer.jsx';

class AddReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      email: '',
      selectedImageFiles: [],
      filesLoaded: 0,
      reviewSummary: '',
      reviewBody: '',
      characteristics: [],
      recommendation: '',
      overalRating: 0
    };
    this.onChangeFileHandler = this.onChangeFileHandler.bind(this);
    this.onClickUploadHandler = this.onClickUploadHandler.bind(this);
  };

  componentDidMount() {
    document.getElementById('default-modal-close-button').addEventListener('click', (event) => {
      this.props.top.hideModal();
    })
  }

  onChangeFileHandler(event) {
    let tempImageURLArray = this.state.selectedImageFiles;
    let fileCount = this.state.fileLoaded;
    tempImageURLArray.push(URL.createObjectURL(event.target.files[0]));
    fileCount++;
    this.setState({
      selectedImageFiles: tempImageURLArray,
      fileLoaded: fileCount
    });
  }

  onClickUploadHandler() {
    const data = new FormData();
    data.append('file', this.state.selectedImageFiles);
    axios.post(`http://localhost:${port}/upload`, data)
      .then(response => {
        console.log('successful upload: ', response);
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Example Modal Window</h1>
        <form id="review-upload-form"
          data-testid="review-upload-form"
          encType="multipart/form-data"
          action="/photo-upload"
          method="post">
          <input type="file" name="review-photo" multiple />
          <input type="submit" value="Upload Image" name="submit" data-testid="review-upload-form-submit" />
          <input type='text' id='random' name='random' /><br></br>
          <span id="status"></span>
        </form>
        <input type="file" onChange={this.onChangeFileHandler}/>
        {/* {
          props.selectedImageFiles.map((image, index) => {
            <img src={image} key={index} />
          })
        } */}
        <ReviewThumbnailContainer thumbnails={this.state.selectedImageFiles} imageLoaded={this.state.imageLoaded} />
        <button id='default-modal-close-button' data-testid="example-modal-close-button">Click to hide modal.</button>
      </React.Fragment>
    );
  }
};

export default AddReviewModal;