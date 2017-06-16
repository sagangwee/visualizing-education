import React, { Component } from 'react';
import ReactHighmaps from 'react-highcharts/ReactHighmaps.src';
import USMap from '../data/usmap';

export default class StateMap extends Component {
  render() {
    const { valueName, chartTitle, data } = this.props;

  	const USAverages = [{
	    "State": "U.S.",
	    "4th grade math - percent at or above proficient": 39.4,
	    "8th grade math - percent at or above proficient": 32.1,
	    "4th grade reading - percent at or above proficient": 34.8,
	    "8th grade reading - percent at or above proficient": 32.7,
	    "Percent of students eligible for free/reduced price lunch": "--"
  	}];

  	const config = {
  	  chart: {
  	  	renderTo: 'state-map',
  	  	className: 'state-map',
        spacingBottom: 20
    	},

	    title: {
	      text: chartTitle
	    },

	    subtitle: {
	      text: 'Source: <a href="http://www.edcounts.org/createtable/step1.php">Education Counts 2015 Data</a>'
	    },

	    mapNavigation: {
        enabled: false,
        buttonOptions: {
          verticalAlign: 'top'
        }
	    },

	    legend: {
	    	title: {
          text: valueName
        },
        backgroundColor: "#fff",
        borderWidth: 2,
        margin: 20
	    },

	    colorAxis: {
	    	description: 'Average Percentage of 4 scores',
	      min: 0,
	      max: 100
	    },

	    tooltip: {
	    	borderWidth: 3,
        formatter: function() {
          var s = '<b class="tooltip__header">' + this.point.name + '</b><br/>';
          s += valueName + ': ' + this.point.value + '%<br/>';
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
            color: '#3b3b3b;',
            style: {
              textOutline: false 
            },
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
