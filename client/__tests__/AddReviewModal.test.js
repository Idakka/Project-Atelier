import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import RatingsAndReviews from '../src/components/RatingsAndReviews/RatingsAndReviews.jsx';
import ProductDetailPage from '../src/components/ProductDetailPage.jsx';
import AddReviewModal from '../src/components/RatingsAndReviews/AddReviewModal.jsx';
import { reviewsMock, reviewsMetaMock } from '../src/mockData/reviewsMock.js';

import { findDOMNode } from 'react-dom';
import { mount, shallow } from 'enzyme';
import Modal from 'react-modal';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() })

beforeEach(() => {
  // var ProductDetailPageMock = new ProductDetailPage;
  // const wrapper = mount(<RatingsAndReviews top={ProductDetailPageMock} onChangeFileHandler={ProductDetailPageMock.onChangeFileHandler} onClickUploadHandler={ProductDetailPageMock.onClickUploadHandler} productId={reviewsMock.product} reviews={reviewsMock.results} reviewsMeta={reviewsMetaMock} />);
});

afterEach(() => {
  cleanup();
});

test('renders react-modal', () => {
  // var ProductDetailPageMock = new ProductDetailPage;
  // const wrapper = mount(
  //   <RatingsAndReviews top={ProductDetailPageMock} onChangeFileHandler={ProductDetailPageMock.onChangeFileHandler} onClickUploadHandler={ProductDetailPageMock.onClickUploadHandler} productId={reviewsMock.product} reviews={reviewsMock.results} reviewsMeta={reviewsMetaMock} />
  // );
  const wrapper = mount(
    <ProductDetailPage />
  )
  // wrapper.find('.add-review-button').simulate('click');
  console.log(wrapper.find('.review-btn').length);
  // // fireEvent.click(screen.getByTestId('review-add'));
  // // let theModal = screen.getByTestId('review-upload-form-submit');
  // // // expect(screen.queryByTestId('example-modal-close-button')).toBeInTheDocument();
  // // expect(theModal).toBeInTheDocument();
  // // wrapper.find('.add-review-button').simulate('click');
  // expect(wrapper.find('#review-form')).toHaveLength(1);
  expect(wrapper.find('.review-btn')).not.toHaveLength(0);
});

xit('opens modal when button is clicked', () => {
  const wrapper = shallow(<ModalContainer />);
  expect(wrapper.find(Modal).prop('isOpen')).toBe(false);

  wrapper.find('button').simulate('click');
  expect(wrapper.find(Modal).prop('isOpen')).toBe(true);
});

xit('renders childen when modal is open', () => {
  const wrapper = shallow(<ModalContainer>modal content</ModalContainer>);
  expect(wrapper.find(Modal).prop('children')).toBe('modal content');
  // expect(wrapper.find(Modal).prop('children')).toMatchSnapshot();
});

/*
it('renders content when modal is open', () => {
  const wrapper = shallow(<ModalContainer>modal content</ModalContainer>);
  wrapper.find('button').simulate('click');
  expect(wrapper.find(Modal).text()).toBe('modal content');
});
*/

xit('renders content when modal is open', () => {
  // mount renders to the dom (real or mocked)
  const wrapper = mount(<ModalContainer>modal content</ModalContainer>);
  wrapper.find('button').simulate('click');

  // element text
  expect(wrapper.find(Modal).text()).toBe('modal content');

  // instance node
  const instance = wrapper.find(Modal).instance();
  expect(instance.node.innerText).toBe('modal content');

  // findDOMNode
  const portalNode = findDOMNode(instance.portal);
  expect(portalNode.innerText).toBe('modal content');
});

var onChangeFileHandler = (event) => {
  this.setState({
    selectedImageFile: event.target.files[0],
    fileLoaded: 0
  });
}

var onClickUploadHandler = () => {
  const data = new FormData();
  data.append('file', this.state.selectedImageFile);
  axios.post(`http://localhost:${port}/upload`, data, {
  })
    .then(response => {
      console.log('successful upload: ', response);
    });
}

xtest('Ratings and Reviews renders the AddReviewModal form', () => {
  fireEvent.click(screen.getByTestId('add-review-button'));
  let theModal = screen.getByTestId('review-upload-form-submit');
  expect(screen.queryByTestId('example-modal-close-button')).toBeInTheDocument();
  expect(theModal).toBeInTheDocument();
});