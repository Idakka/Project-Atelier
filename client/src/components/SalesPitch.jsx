import React from 'react';
import VerticalRule from './VerticalRule.jsx';

var SalesPitch = function(props) {
  return (
    <div className="overview-column-container">
      <div id="sales-pitch-paragraph">
        <h3>Product Slogan. Pithy Description Or Catchphrase</h3>
        <p>
          Cupcake ipsum dolor sit amet lemon drops gummies chupa chups. Croissant chocolate cake gummi bears. Soufflé cheesecake jelly beans ice cream sweet. Bonbon tootsie roll candy apple pie powder chocolate sesame snaps cookie. Chocolate candy canes soufflé bear claw jelly sesame snaps chocolate bar dragée. Liquorice powder chupa chups icing sesame snaps caramels chocolate cake. Powder fruitcake powder cake marshmallow.
        </p><p>
          Brownie halvah lollipop cupcake dessert. Croissant bonbon sweet cookie cake. Toffee macaroon powder tart jelly beans caramels.
        </p>
      </div>
      <VerticalRule />
      <div className="sales-pitch-checklist">
        <div><span className="material-icons">done</span>Totally Sweet.</div>
        <div><span className="material-icons">done</span>Totally Sweet.</div>
        <div><span className="material-icons">done</span>Totally Sweet.</div>
        <div><span className="material-icons">done</span>Totally Sweet.</div>
      </div>
    </div>
  );
};

export default SalesPitch;