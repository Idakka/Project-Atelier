import React from 'react';

const ClickTracker = (WrappedComponent, moduleName) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    // add onClick handler function
    logGenerator(event) {
      const generatedLog = {
        element: event.target,
        time: Date.now(),
        module: moduleName,
      };
      console.log(generatedLog);
    }

    // add event listener to wrapper of component
    // on click => create log object
    render() {
      return (
        <div className="click-tracker" onClick={(event) => this.logGenerator(event)}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default ClickTracker;
