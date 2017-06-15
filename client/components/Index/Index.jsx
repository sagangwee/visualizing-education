import React, { Component } from 'react';
import StateMap from '../StateMap';

class IndexComponent extends Component {
  render() {

    return (
      <section>
        <h2 className="text-center opening-title">Visualizing Education</h2>
        <StateMap/>
      </section>
    );
  }
}

export default IndexComponent;
