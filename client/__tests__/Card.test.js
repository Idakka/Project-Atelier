import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Card from '../src/components/Card';

const cardInformation = {
  'id': 22126,
  'campus': 'hr-rpp',
  'name': 'Heir Force Ones',
  'slogan': 'A sneaker dynasty',
  'description': 'Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I\'m just a sneaker pro, I love Pumas and shell toes, but can\'t nothin compare to a fresh crispy white pearl',
  'category': 'Kicks',
  'default_price': '99.00',
  'created_at': '2021-03-18T16:09:30.589Z',
  'updated_at': '2021-03-18T16:09:30.589Z',
  'features': [
    {
      'feature': 'Sole',
      'value': 'Rubber'
    },
    {
      'feature': 'Material',
      'value': 'FullControlSkin'
    },
    {
      'feature': 'Mid-Sole',
      'value': 'ControlSupport Arch Bridge'
    },
    {
      'feature': 'Stitching',
      'value': 'Double Stitch'
    }
  ],
  'rating': 3.142857142857143,
  'style': {
    'style_id': 123167,
    'name': 'White & White',
    'original_price': '99.00',
    'sale_price': null,
    'default?': true,
    'photos': [
      {
        'thumbnail_url': 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        'url': 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
      },
      {
        'thumbnail_url': 'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        'url': 'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
      },
      {
        'thumbnail_url': 'https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        'url': 'https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
      },
      {
        'thumbnail_url': 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        'url': 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80'
      },
      {
        'thumbnail_url': 'https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        'url': 'https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'
      },
      {
        'thumbnail_url': 'https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        'url': 'https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80'
      },
      {
        'thumbnail_url': 'https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        'url': 'https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80'
      },
      {
        'thumbnail_url': 'https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        'url': 'https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80'
      },
      {
        'thumbnail_url': 'https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        'url': 'https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
      },
      {
        'thumbnail_url': 'https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        'url': 'https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
      },
      {
        'thumbnail_url': 'https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        'url': 'https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
      }
    ],
    'skus': {
      '714558': {
        'quantity': 14,
        'size': '7'
      },
      '714559': {
        'quantity': 25,
        'size': '7.5'
      },
      '714560': {
        'quantity': 9,
        'size': '8'
      },
      '714561': {
        'quantity': 2,
        'size': '8.5'
      },
      '714562': {
        'quantity': 18,
        'size': '9'
      },
      '714563': {
        'quantity': 12,
        'size': '9.5'
      },
      '714564': {
        'quantity': 10,
        'size': '10'
      },
      '714565': {
        'quantity': 18,
        'size': '10.5'
      },
      '714566': {
        'quantity': 11,
        'size': '11'
      },
      '714567': {
        'quantity': 35,
        'size': '11.5'
      },
      '714568': {
        'quantity': 25,
        'size': '12'
      }
    }
  }
};

describe('Related items Cards', () => {
  beforeEach(() => {
    render(<Card product={cardInformation} cardType="related" />);
  });

  afterEach(() => {
    cleanup();
  });

  test('Should render Card', () => {
    const CardComponent = screen.getByTestId('card--related');
    expect(CardComponent).toBeInTheDocument();
  });

  test('Should contain image', () => {
    const imageElement = screen.getByAltText('Heir Force Ones');
    expect(imageElement).toBeInTheDocument();
  });

  test('Should contain a category', () => {
    const categoryElement = screen.getByText('Kicks');
    expect(categoryElement).toBeInTheDocument();
  });

  test('Should contain a product name', () => {
    const productNameElement = screen.getByText('Heir Force Ones');
    expect(productNameElement).toBeInTheDocument();
  });

  test('Should contain a price', () => {
    const priceElement = screen.getByText('$99');
    expect(priceElement).toBeInTheDocument();
  });

  test('Should contain a StarReview component', () => {
    const StarReviewComponent = screen.getByTestId('star-review');
    expect(StarReviewComponent).toBeInTheDocument();
  });
});
