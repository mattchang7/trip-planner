console.log('Hello from JS')

import mapboxgl from "mapbox-gl";
import buildMarker from './marker'

mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGNoYW5nIiwiYSI6ImNrZHlwNnEzZzFtam4ycmtqMjdndmVnd2IifQ.Evprna9cxBFipxN9LCe-TQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("hotel", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map)

