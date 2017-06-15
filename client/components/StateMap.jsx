import React, { Component } from 'react';
import ReactHighmaps from 'react-highcharts/ReactHighmaps.src';
import USMap from '../data/usmap';
import data from '../data/state-math-reading-lunch.json';

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
	      min: 0
	    },

	    plotOptions: {
		    map: {
		      allAreas: false,
		      joinBy: ['iso-a2', 'code'],
		      dataLabels: {
		        enabled: true,
		        color: 'white',
		        style: {
		          fontWeight: 'bold'
		        }
		      },
		      mapData: USMap,
		      tooltip: {
		        headerFormat: '',
		        pointFormat: '{point.name}: <b>{series.name}</b>'
		      }

		    }
		  },

	    series: [{
        data: data,
        joinBy: ['name', 0],
        keys: ['name', '4math', '8math', '4read', '8read', 'lunch'],
        name: 'Random data',
        states: {
          hover: {
            color: '#BADA55'
          }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
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