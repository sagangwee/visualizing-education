import React, { Component } from 'react';
import StateMap from '../StateMap';
import FourthMath from '../../data/4thgrademath.json';
import EighthMath from '../../data/8thgrademath.json';
import FourthRead from '../../data/4thgraderead.json';
import EighthRead from '../../data/8thgraderead.json';

class IndexComponent extends Component {
  render() {
    const fourthMathValueName = "4th grade math - percent at or above proficient";
    const fourthMathChartTitle = "4th Grade Math and Income";
    const eighthMathValueName = "8th grade math - percent at or above proficient";
    const eighthMathChartTitle = "8th Grade Math and Income";
    const fourthReadValueName = "4th grade reading - percent at or above proficient";
    const fourthReadChartTitle = "4th Grade Reading and Income";
    const eighthReadValueName = "8th grade reading - percent at or above proficient";
    const eighthReadChartTitle = "8th Grade Reading and Income";

    return (
      <section>
        <h2 className="text-center opening-title">Visualizing Education</h2>
        <StateMap 
          valueName={fourthMathValueName}
          chartTitle={fourthMathChartTitle}
          data={FourthMath}
        />
      </section>
    );
  }
}

export default IndexComponent;
