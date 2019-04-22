window.onload = function() {
    if (navigator.geolocation) {
        // geolocation is supported
        navigator.geolocation.getCurrentPosition(function(position) {
            findNearest(position.coords.latitude, position.coords.longitude);
        });
    } else {
        alert('Geolocation is not supported in this browser.');
    }
}

// find the restaurant that is nearest to the user's location
function findNearest(lat, lon) {
    // calculate the distance

    // 310 West 38th Street
    var d1 = haversine(lat, lon, 40.755018, -73.992556);

    // 2450 Broadway
    var d2 = haversine(lat, lon, 40.791121, -73.973971);

    // 200 West 44th Street
    var d3 = haversine(lat, lon, 40.757498, -73.986654);

    // add text to the distance labels
    document.getElementById('location1distance').textContent = `Distance ${d1} miles.`
    document.getElementById('location2distance').textContent = `Distance ${d2} miles.`
    document.getElementById('location3distance').textContent = `Distance ${d3} miles.`

    // find the smallest distance
    if (d1 <= d2 && d1 <= d3) {
        // location 1
        document.getElementById('location1').className = 'nearest';

    } else if (d2 <= d1 && d2 <= d3) {
        // location 2
        document.getElementById('location2').className = 'nearest';
    } else {
        // location 3
        document.getElementById('location3').className = 'nearest';
    }
}