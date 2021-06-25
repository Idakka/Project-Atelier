import React from 'react';
import generateSelectorPath from '../scripts/generateSelectorPath.js';
import axios from 'axios';

const ClickTracker = (WrappedComponent) => {
  return class BOB extends React.Component {
    constructor(props) {
      super(props);
    }

    logGenerator(event) {
      const selectorPath = generateSelectorPath(event.target);
      const generatedLog = {
        element: selectorPath,
        widget: WrappedComponent.displayName || WrappedComponent.name,
        time: new Date().toString(),
      };
    }

    render() {
      return (
        <div className="click-tracker" onClick={this.logGenerator}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default ClickTracker;
