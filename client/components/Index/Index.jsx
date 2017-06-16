import React, { Component } from 'react';
import AveragedStateMap from '../AveragedStateMap';

class IndexComponent extends Component {
  render() {

    return (
      <section>
        <h2 className="text-center opening-title">Visualizing Education</h2>
        <AveragedStateMap/>
      </section>
    );
  }
}

export default IndexComponent;
