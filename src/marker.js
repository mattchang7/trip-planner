import mapbox from "mapbox-gl";

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
    // Your Code Here
    console.log('TYPE \n\n', type)
    if (type === 'hotel'){
        console.log('\n\nIN HOTEL\n\n')
        const markerDomEl = document.createElement("div"); // Create a new, detached DIV
        markerDomEl.style.width = "32px";
        markerDomEl.style.height = "39px";
        markerDomEl.style.backgroundImage = `url(${iconURLs.hotels})`;
        const marker = new mapbox.Marker(markerDomEl).setLngLat(coords);
        console.log(marker)
        return marker
    }
    if (type === 'activity') {
        new mapboxgl.Marker(iconURLs.activities).setLngLat(coords).addTo(map);
    }
    if (type === 'restaurant') {
        new mapboxgl.Marker(iconURLs.restaurants).setLngLat(coords).addTo(map);
    }
};

export default buildMarker;