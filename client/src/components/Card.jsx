import React, { useEffect, useState } from 'react';
import StarReview from './StarReview.jsx';

const Card = ({ product, cardType }) => {
  const [styles, setStyles] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setStyles([
      {
        'style_id': 123142,
        'name': 'Forest Green & Black',
        'original_price': '140.00',
        'sale_price': null,
        'default?': true,
        'photos': [
          {
            'thumbnail_url': 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            'url': 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
          },
          {
            'thumbnail_url': 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            'url': 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80'
          },
          {
            'thumbnail_url': 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            'url': 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80'
          },
          {
            'thumbnail_url': 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            'url': 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
          },
          {
            'thumbnail_url': 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            'url': 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
          },
          {
            'thumbnail_url': 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            'url': 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
          }
        ],
        'skus': {
          '714432': {
            'quantity': 8,
            'size': 'XS'
          },
          '714433': {
            'quantity': 16,
            'size': 'S'
          },
          '714434': {
            'quantity': 17,
            'size': 'M'
          },
          '714435': {
            'quantity': 10,
            'size': 'L'
          },
          '714436': {
            'quantity': 15,
            'size': 'XL'
          },
          '714437': {
            'quantity': 4,
            'size': 'XL'
          }
        }
      }
    ]);
    const reviews = [
      {
        'review_id': 5,
        'rating': 3,
        'summary': 'I\'m enjoying wearing these shades',
        'recommend': false,
        'response': null,
        'body': 'Comfortable and practical.',
        'date': '2019-04-14T00:00:00.000Z',
        'reviewer_name': 'shortandsweeet',
        'helpfulness': 5,
        'photos': [
          {
            'id': 1,
            'url': 'urlplaceholder/review_5_photo_number_1.jpg'
          },
          {
            'id': 2,
            'url': 'urlplaceholder/review_5_photo_number_2.jpg'
          },
        ]
      },
      {
        'review_id': 3,
        'rating': 4,
        'summary': 'I am liking these glasses',
        'recommend': false,
        'response': 'Glad you\re enjoying the product!',
        'body': 'They are very dark. But that\'s good because I\'m in very sunny spots',
        'date': '2019-06-23T00:00:00.000Z',
        'reviewer_name': 'bigbrotherbenjamin',
        'helpfulness': 5,
        'photos': [],
      }
    ];
    setRating(reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length);
  }, []);

  console.log(styles);

  cardType = 'related';

  return (
    <div className="card product">
      <div className="product__img">
        <img src={styles.length !== 0 ? styles[0].photos[0].url : '#'} alt={product.name} />
        {cardType === 'related' && (
          <span className="material-icons">star_outline</span>
        )}
        {cardType === 'outfit' && (
          <span className="material-icons">do_not_disturb</span>
        )}
      </div>
      <div className="product__details">
        <p className="product__category">{product.category}</p>
        <p className="product__name">{product.name}</p>
        <p className="product__price">{product.price}</p>
        <StarReview rating={rating} />
      </div>
    </div>
  );
};

export default Card;
