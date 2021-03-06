import React from 'react';
import generateSelectorPath from '../scripts/generateSelectorPath.js';
import axios from 'axios';

const ClickTracker = (WrappedComponent) => {
  return class BOB extends React.Component {
    constructor(props) {
      super(props);
    }

    sendInteraction(event) {
      const selectorPath = generateSelectorPath(event.target);
      const interaction = {
        element: selectorPath,
        widget: WrappedComponent.displayName || WrappedComponent.name,
        time: new Date().toString(),
      };
      axios.post('/interactions', interaction)
        .then(response => response)
        .catch(error => error);
    }

    render() {
      return (
        <div className="click-tracker" onClick={this.sendInteraction} data-testid="click-tracker">
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default ClickTracker;
