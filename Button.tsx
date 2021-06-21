import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <button
          onClick={() => this.props.updateCounter(this.props.incrementBy)}
        >
          +{this.props.incrementBy}
        </button>{' '}
      </>
    );
  }
}
