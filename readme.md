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

