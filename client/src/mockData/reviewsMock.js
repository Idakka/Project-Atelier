const reviewsMock = {
  "product":"22122",
  "page":0,"count":8,
  "results":[
    {
      "review_id":406680,
      "rating":3,
      "summary":"Djembe",
      "recommend":true,
      "response":null,
      "body":"Djembe",
      "date":"2021-06-09T00:00:00.000Z",
      "reviewer_name":"Djembe",
      "helpfulness":0,
      "photos":[]
    },
    {
      "review_id":406679,"rating":3,"summary":"Djembe","recommend":true,"response":null,"body":"Djembe","date":"2021-06-09T00:00:00.000Z","reviewer_name":"Djembe","helpfulness":0,"photos":[]},{"review_id":406678,"rating":3,"summary":"Djembe","recommend":true,"response":null,"body":"Djembe","date":"2021-06-09T00:00:00.000Z","reviewer_name":"Djembe","helpfulness":0,"photos":[]},{"review_id":308845,"rating":2,"summary":"my review","recommend":true,"response":null,"body":"is thus to be revered like this","date":"2021-03-30T00:00:00.000Z","reviewer_name":"Arf Barley","helpfulness":0,"photos":[{"id":536090,"url":"http://www.unsplash.com/3"}]},{"review_id":308844,"rating":2,"summary":"my review","recommend":true,"response":null,"body":"is thus to be revered like this","date":"2021-03-30T00:00:00.000Z","reviewer_name":"Arf Barley","helpfulness":0,"photos":[{"id":536089,"url":"http://www.unsplash.com/3"}]},{"review_id":289140,"rating":4,"summary":"This product was ok!","recommend":false,"response":"","body":"I really did not like this product solely because I am tiny and do not fit into it.","date":"2019-01-11T00:00:00.000Z","reviewer_name":"mymainstreammother","helpfulness":2,"photos":[]},{"review_id":289139,"rating":5,"summary":"This product was great!","recommend":true,"response":"","body":"I really did or did not like this product based on whether it was sustainably sourced. Then I found out that its made from nothing at all.","date":"2019-01-01T00:00:00.000Z","reviewer_name":"funtime","helpfulness":8,"photos":[]
    }
  ]
};

const reviewsMetaMock = {
  "product_id":"22122",
  "ratings":{"2":"2","3":"3","4":"1","5":"1"},
  "recommended":{"false":"1","true":"6"},
  "characteristics":{
    "Fit":{
      "id":74277,
      "value":"4.6190476190476190"
    },
    "Length":{"id":74278,"value":"3.5000000000000000"},
    "Comfort":{"id":74279,"value":"5.0000000000000000"},
    "Quality":{"id":74280,"value":"4.0000000000000000"}
  }
};

export {
  reviewsMock,
  reviewsMetaMock
};