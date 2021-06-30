import React from 'react';
import ReviewThumbnailContainer from './ReviewThumbnailContainer.jsx';
import WordCount from './WordCount.jsx';

class AddReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: 'Example: jackson11!',
      email: '',
      selectedImageFiles: [],
      filesLoaded: 0,
      reviewSummary: 'Example: Best purchase ever!',
      reviewBody: 'Why did you like the product or not?',
      characteristics: [],
      recommendation: 'yes',
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
    // event.preventDefault();
    console.log("target for onChangeHandler", event.target.value);
    const value = event.target.value;
    const name = event.target.name;
    this.setState( {
      [name]: value
    }, () => {
      console.log('new state =>', this.state);
    });
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
        <form id="review-upload-form"
          data-testid="review-upload-form"
          encType="multipart/form-data"
          action="/photo-upload"
          method="post">
          <div className="review-form-title">Write Your Review</div>
          <div className="review-form-subtitle">About the {this.props.currentProduct.name}</div>
          <fieldset>
            <legend>
              <abbr title="This field is mandatory"
                aria-label="required"> * </abbr>
                Do you recommend this product?
              </legend>
            <input
              type="radio"
              required
              name="recommendation"
              id="recommend-yes"
              value="yes"
              checked={this.state.recommendation === 'yes' || false}
              onChange={this.onChangeHandler} />Yes
            <label htmlFor="recommend-yes" value="Yes"/>
            <input
            type="radio"
            required
            name="recommendation"
            id="recommend-no"
            value="no"
            checked={this.state.recommendation === 'no' || false}
            onChange={this.onChangeHandler}/> No
            <label htmlFor="recommend-no" value="No"/>
          </fieldset>
          <label>
            Review Summary:
            </label>
          <input
            type="text"
            id="review-summary"
            name="reviewSummary"
            defaultValue={this.state.reviewSummary}
            maxLength="60"
            data-testid="review-summary"
            onChange={this.onChangeHandler}
          />
          <br></br>
          <label>
            <abbr title="This field is mandatory"
              aria-label="required"> * </abbr>
              Review:
          </label>
          <textarea
            className="form-body-text"
            id="review-body-text"
            name="reviewBody"
            value={this.state.reviewBody}
            required
            maxLength="1000"
            onChange={this.onChangeHandler}
          />
          <WordCount text={this.state.reviewBody} />
          {/* <input type="file" name="review-photo" multiple /> */}
          <label>
            <abbr title="This field is mandatory"
              aria-label="required"> * </abbr>
                What is your nickname?
          </label>
          <input
            type="text"
            id="review-nickname"
            name="nickname"
            defaultValue={this.state.nickname}
            maxLength="60"
            data-testid="review-nickname"
          />
          <p className="form-detail-text">For privacy reasons, do not use your full name or email address</p>
          <br></br>
          <label>
          <abbr title="This field is mandatory"
              aria-label="required"> * </abbr>
              Your Email:
          </label>
          <input
            type="text"
            id="review-email"
            name="email"
            defaultValue={this.state.email}
            data-testid="review-name"
          />
          <p className="form-detail-text">For authentication reasons, you will not be emailed</p>
          <input
            type="submit"
            value="Submit Review"
            name="submit"
            data-testid="review-upload-form-submit"
          />
          {/* <input type='text' id='review-body' name='random' /><br></br> */}
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