const productInfoMock = {
  'id':22126,
  'campus':'hr-rpp',
  'name':'Heir Force Ones',
  'slogan':'A sneaker dynasty',
  'description':'Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I\'m just a sneaker pro, I love Pumas and shell toes, but can\'t nothin compare to a fresh crispy white pearl',
  'category':'Kicks',
  'default_price':'99.00',
  'created_at':'2021-03-18T16:09:30.589Z','updated_at':'2021-03-18T16:09:30.589Z',
  'features':[
    {'feature':'Sole','value':'Rubber'},
    {'feature':'Material',
      'value':'FullControlSkin'},
    {'feature':'Mid-Sole',
      'value':'ControlSupport Arch Bridge'},
    {'feature':'Stitching','value':'Double Stitch'}
  ]
};

const relatedProductsMock = [
  22127,
  22127,
  22129,
  22130,
  22122,
  22124
];

const productStylesMock =
{
  'product_id': '22126',
  'results': [
    {
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
    },
    {
      'style_id': 123168,
      'name': 'White & Red',
      'original_price': '99.00',
      'sale_price': null,
      'default?': false,
      'photos': [
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        }
      ],
      'skus': {
        '714569': {
          'quantity': 14,
          'size': '7'
        },
        '714570': {
          'quantity': 25,
          'size': '7.5'
        },
        '714571': {
          'quantity': 9,
          'size': '8'
        },
        '714572': {
          'quantity': 2,
          'size': '8.5'
        },
        '714573': {
          'quantity': 18,
          'size': '9'
        },
        '714574': {
          'quantity': 12,
          'size': '9.5'
        },
        '714575': {
          'quantity': 10,
          'size': '10'
        },
        '714576': {
          'quantity': 18,
          'size': '10.5'
        },
        '714577': {
          'quantity': 11,
          'size': '11'
        },
        '714578': {
          'quantity': 35,
          'size': '11.5'
        },
        '714579': {
          'quantity': 25,
          'size': '12'
        }
      }
    },
    {
      'style_id': 123169,
      'name': 'White & Black',
      'original_price': '99.00',
      'sale_price': null,
      'default?': false,
      'photos': [
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2764&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80'
        }
      ],
      'skus': {
        '714580': {
          'quantity': 14,
          'size': '7'
        },
        '714581': {
          'quantity': 25,
          'size': '7.5'
        },
        '714582': {
          'quantity': 9,
          'size': '8'
        },
        '714583': {
          'quantity': 2,
          'size': '8.5'
        },
        '714584': {
          'quantity': 18,
          'size': '9'
        },
        '714585': {
          'quantity': 12,
          'size': '9.5'
        },
        '714586': {
          'quantity': 10,
          'size': '10'
        },
        '714587': {
          'quantity': 18,
          'size': '10.5'
        },
        '714588': {
          'quantity': 11,
          'size': '11'
        },
        '714589': {
          'quantity': 35,
          'size': '11.5'
        },
        '714590': {
          'quantity': 25,
          'size': '12'
        }
      }
    },
    {
      'style_id': 123170,
      'name': 'White & Blue',
      'original_price': '99.00',
      'sale_price': null,
      'default?': false,
      'photos': [
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
        }
      ],
      'skus': {
        '714591': {
          'quantity': 14,
          'size': '7'
        },
        '714592': {
          'quantity': 25,
          'size': '7.5'
        },
        '714593': {
          'quantity': 9,
          'size': '8'
        },
        '714594': {
          'quantity': 2,
          'size': '8.5'
        },
        '714595': {
          'quantity': 18,
          'size': '9'
        },
        '714596': {
          'quantity': 12,
          'size': '9.5'
        },
        '714597': {
          'quantity': 10,
          'size': '10'
        },
        '714598': {
          'quantity': 18,
          'size': '10.5'
        },
        '714599': {
          'quantity': 11,
          'size': '11'
        },
        '714600': {
          'quantity': 35,
          'size': '11.5'
        },
        '714601': {
          'quantity': 25,
          'size': '12'
        }
      }
    }
  ]
};

const productsMock = [
  {
    'id':22122,
    'campus':'hr-rpp',
    'name':'Camo Onesie',
    'slogan':'Blend in to your crowd',
    'description':'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    'category':'Jackets',
    'default_price':'140.00',
    'created_at':'2021-03-18T16:09:30.589Z',
    'updated_at':'2021-03-18T16:09:30.589Z'
  },
  {
    'id':22123,'campus':'hr-rpp',
    'name':'Bright Future Sunglasses',
    'slogan':'You\'ve got to wear shades',
    'description':'Where you\'re going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.','category':'Accessories',
    'default_price':'69.00',
    'created_at':'2021-03-18T16:09:30.589Z',
    'updated_at':'2021-03-18T16:09:30.589Z'
  },
  {
    'id':22124,'campus':'hr-rpp',
    'name':'Morning Joggers',
    'slogan':'Make yourself a morning person',
    'description':'Whether you\'re a morning person or not.  Whether you\'re gym bound or not.  Everyone looks good in joggers.',
    'category':'Pants',
    'default_price':'40.00',
    'created_at':'2021-03-18T16:09:30.589Z',
    'updated_at':'2021-03-18T16:09:30.589Z'},
  {'id':22125,
    'campus':'hr-rpp',
    'name':'Slacker\'s Slacks',
    'slogan':'Comfortable for everything, or nothing',
    'description':'I\'ll tell you how great they are after I nap for a bit.',
    'category':'Pants',
    'default_price':'65.00',
    'created_at':'2021-03-18T16:09:30.589Z',
    'updated_at':'2021-03-18T16:09:30.589Z'
  },
  {
    'id':22126,
    'campus':'hr-rpp',
    'name':'Heir Force Ones',
    'slogan':'A sneaker dynasty',
    'description':'Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I\'m just a sneaker pro, I love Pumas and shell toes, but can\'t nothin compare to a fresh crispy white pearl',
    'category':'Kicks',
    'default_price':'99.00',
    'created_at':'2021-03-18T16:09:30.589Z','updated_at':'2021-03-18T16:09:30.589Z'
  },
  {
    'id':22127,'campus':'hr-rpp','name':'Pumped Up Kicks','slogan':'Faster than a just about anything','description':'The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.','category':'Kicks','default_price':'89.00','created_at':'2021-03-18T16:09:30.589Z','updated_at':'2021-03-18T16:09:30.589Z'
  },
  {
    'id':22128,'campus':'hr-rpp','name':'Blues Suede Shoes','slogan':'2019 Stanley Cup Limited Edition','description':'Touch down in the land of the Delta Blues in the middle of the pouring rain','category':'Dress Shoes','default_price':'120.00','created_at':'2021-03-18T16:09:30.589Z','updated_at':'2021-03-18T16:09:30.589Z'},{'id':22129,'campus':'hr-rpp','name':'YEasy 350','slogan':'Just jumped over jumpman','description':'These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.','category':'Kicks','default_price':'450.00','created_at':'2021-03-18T16:09:30.589Z','updated_at':'2021-03-18T16:09:30.589Z'
  }
];

export {
  productsMock,
  productInfoMock,
  productStylesMock,
  relatedProductsMock
};