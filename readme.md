# Visualizing Education

## Goal
Visualize correlations of academic achievement with:

* reading
* income (eligibility for free/reduced lunch)
* property taxes of neighborhood

interactively and in a beautiful way.

## Problem 1: Which Technologies?

d3? Or Highcharts.js?

Highcharts is simpler, but d3 is just so _cool_.

### If d3:
    
    How to integrate with React properly?

* Victory.js
* React-d3
* React-d3-components
* React-faux-dom

## Problem 2: How to present data?

As a simple bar graph? As a stepper? Through elegant scrollytelling?

Scrollytelling is visually really appealing, but the issues I want to visualize does not really fit into a sequential story. Or does it?

For showing property tax data, an interactive map like in [this](http://www.npr.org/2016/04/18/474256366/why-americas-schools-have-a-money-problem) NPR article might be nice. My lunch data is organized by states, so a map may be appropriate there too... Perhaps an interactive map with a tooltip on hover?

For achievement with reading, simple graphs should work, but how to make them more exciting? 

## Problem 3: US map with tooltip on hover

Found a good [example](https://vida.io/gists/vfP7KiHLfDbnDWBsX) using jQuery and d3.js. How to integrate this example with React? Should I be using Flux or Redux? Seems unnecessary for this simple app. 

Highmaps seems easy to use and already has what I'm [looking for](http://jsfiddle.net/gh/get/library/pure/highslide-software/highcharts.com/tree/master/samples/mapdata/countries/us/us-all).

## Problem 4: Math, Reading, Income on traditional bar graphs

Now that I have the math and reading percentages on the US map, I want to display the information side by side for ease of comparison. Maybe something like [this](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/css/axis/)?

But should I place the bar graph directly below the map? Or should I place it side by side (there's room on a desktop screen) and then stack them on mobile?

