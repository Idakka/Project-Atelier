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
      reviewBody: 'Why did you like the product or not?',
      characteristics: [],
      recommendation: '',
      overalRating: 0
    };
    this.onChangeFileHandler = this.onChangeFileHandler.bind(this);
    this.onClickUploadHandler = this.onClickUploadHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  };

  componentDidMount() {
    document.getElementById('default-modal-close-button').addEventListener('click', (event) => {
      this.props.top.hideModal();
    })
  }

  onChangeHandler(event) {
    event.preventDefault();
    console.log("target for onChangeHandler", event.target.value);
    const value = event.target.value;
    const name = event.target.name;
    this.setState( {
      [name]: value
    });
    console.log('new state => name: value', name, value);
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
        <h1>Write Your Review</h1>
        <h2>About the {this.props.currentProduct.name}</h2>
        <form id="review-upload-form"
          data-testid="review-upload-form"
          encType="multipart/form-data"
          action="/photo-upload"
          method="post">
          <fieldset>
            <legend>Do you recommend this product?<abbr title="This field is mandatory"
            aria-label="required">*</abbr>
            </legend>
            <input type="radio" required name="recommend" id="recommend-yes" value="yes" />Yes
            {/* <label htmlFor="recommend-yes" value="Yes"/></input> */}
            <input type="radio" required name="recommend" id="recommend-no" value="no" /> No
            {/* <label htmlFor="recommend-no" value="No"/></input> */}
          </fieldset>
          <input type="text" id="review-name" name="reviewSummary" defaultValue="Example: jackson11!" data-testid="review-name" />
          <textarea id="review-body-text" name="reviewBody" value={this.state.reviewBody} required onChange={this.onChangeHandler} />
          {/* <input type="file" name="review-photo" multiple /> */}
          <input type="submit" value="Submit Review" name="submit" data-testid="review-upload-form-submit" />
          <input type='text' id='review-body' name='random' /><br></br>
          <span id="status"></span>
        </form>
        <input type="file" onChange={this.onChangeFileHandler}/>
        {/* {
          props.selectedImageFiles.map((image, index) => {
            <img src={image} key={index} />
          })
        } */}
        <ReviewThumbnailContainer thumbnails={this.state.selectedImageFiles} imageLoaded={this.state.imageLoaded} />
        <button id='default-modal-close-button' data-testid="example-modal-close-button">Click to cancel review.</button>
      </React.Fragment>
    );
  }
};

export default AddReviewModal;