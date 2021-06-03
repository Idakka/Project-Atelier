import React, { useEffect, useState } from 'react';
import StarReview from './StarReview.jsx';

const Card = ({ product, cardType }) => {
  const [styles, setStyles] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setStyles([
      {
        'style_id': 1,
        'name': 'Forest Green & Black',
        'original_price': '140',
        'sale_price': '0',
        'default?': true,
        'photos': [
          {
            'thumbnail_url': 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
            'url': 'urlplaceholder/style_1_photo_number.jpg'
          },
          {
            'thumbnail_url': 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
            'url': 'urlplaceholder/style_1_photo_number.jpg'
          }
        ],
        'skus': {},
      }
    ]);
    setReviews([
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
    ]);
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
        <StarReview rating={reviews.length !== 0 ? reviews[0].rating : 0} />
      </div>
    </div>
  );
};

export default Card;
