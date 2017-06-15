import React, { Component } from 'react';
import ReactHighmaps from 'react-highcharts/ReactHighmaps.src';
import USMap from '../data/usmap';
import FourthMath from '../data/4thgrademath.json';

export default class StateMap extends Component {
  render() {
  	const config = {
  	  chart: {
        spacingBottom: 20
    	},

	    title: {
	      text: 'Highmaps basic demo'
	    },

	    subtitle: {
	      text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/us/us-all.js">United States of America</a>'
	    },

	    mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
	    },

	    colorAxis: {
	      min: 0,
	      max: 100
	    },

	    tooltip: {
        formatter: function() {
          var s = this.point.name + '<br/>';
          s += 'Value:' + this.point.value + '<br/>';
          return s;
       	},
     	},

	    plotOptions: {
		    map: {
		      allAreas: false,
		      joinBy: ['name', 'State'],
		      keys: ['name', '4th grade math - percent at or above proficient'],
		      dataLabels: {
            enabled: true,
            format: '{point.properties.postal-code}'
        	},
        	states: {
            hover: {
              color: '#a4edba'
            }
          },
		      mapData: USMap
		    }
		  },

	    series: [{
        data: FourthMath,
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
	  	<div>
	  		<ReactHighmaps config={ config }/>
	  	</div>
	  );

  }
}