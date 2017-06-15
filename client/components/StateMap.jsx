import React, { Component } from 'react';
import ReactHighmaps from 'react-highcharts/ReactHighmaps.src';
import USMap from '../data/usmap';
import data from '../data/state-math-reading-lunch.json'
import FourthMath from '../data/4thgrademath.json';

export default class StateMap extends Component {
  render() {
  	const USAverages = [{
	    "State": "U.S.",
	    "4th grade math - percent at or above proficient": 39.4,
	    "8th grade math - percent at or above proficient": 32.1,
	    "4th grade reading - percent at or above proficient": 34.8,
	    "8th grade reading - percent at or above proficient": 32.7,
	    "Percent of students eligible for free/reduced price lunch": "--"
  	}];

  	for (let o of data) {
  		o.value = (o.fm + o.em + o.fr + o.er) / 4;
  	}

  	const config = {
  	  chart: {
  	  	renderTo: 'state-map',
  	  	className: 'state-map',
        spacingBottom: 20
    	},

	    title: {
	      text: 'Math, Reading, and Affluence'
	    },

	    subtitle: {
	      text: 'Source: <a href="http://www.edcounts.org/createtable/step1.php">Education Counts 2015 Data</a>'
	    },

	    mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
	    },

	    colorAxis: {
	    	description: 'Average Percentage of 4 scores',
	      min: 0,
	      max: 100
	    },

	    tooltip: {
        formatter: function() {
          var s = '<b>' + this.point.name + '</b><br/>';
          s += '4th Grade Math - Percent At or Above Proficient: ' + this.point.fm + '%<br/>';
          s += '8th Grade Math - Percent At or Above Proficient: ' + this.point.em + '%<br/>';
          s += '4th Grade Reading - Percent At or Above Proficient: ' + this.point.fr + '%<br/>';
          s += '8th Grade Reading - Percent At or Above Proficient: ' + this.point.er + '%<br/>';
          s += 'Percent of students eligible for free/reduced lunch: ' + this.point.lunch + '%<br/>';
          return s;
       	},
     	},

	    plotOptions: {
		    map: {
		      allAreas: false,
		      joinBy: ['name', 'State'],
		      dataLabels: {
            enabled: true,
            format: '{point.properties.postal-code}'
        	},
        	states: {
            hover: {
              color: '#BADA55'
            }
          },
          animation: true,
		      mapData: USMap
		    }
		  },

	    series: [{
        data: data,
        name: 'Fourth grade math'
	    }, {
        name: 'Separators',
        type: 'mapline',
        color: 'silver',
        showInLegend: false,
        enableMouseTracking: false
      	}]
	  }

	  return (
	  	<div id="state-map">
	  		<ReactHighmaps config={ config }/>
	  	</div>
	  );

  }
}