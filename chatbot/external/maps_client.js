var googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_MAPS_KEY
});

getDrivingDuration = function(origin, destination) {
  googleMapsClient.distanceMatrix({
    origins: [origin],
    destinations: [destination],
    departure_time: new Date().getTime(),
    mode: 'driving',
    traffic_model: 'best_guess'
  })
}
