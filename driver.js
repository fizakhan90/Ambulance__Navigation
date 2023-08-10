
const initMap = (lat,lon) =>{
    var map = L.map('map').setView([lat, lon], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([lat, lon]).addTo(map);

var ghRouting = new GraphHopper.Routing({
    key: '355f9c3e-b759-440d-80ac-3a9610ea4832',
    vehicle: 'ambulance', 
  });

  var startingLocation = [lat, lon];

  var radius = 2000;
  var poiType= 'hospital';

  
ghRouting.clearPoints();
ghRouting.addPoint(startingLocation[0], startingLocation[1]);

ghRouting.doRequest('pointofinterest')
  .then(function (json) {
    var pois = json.pois;
    pois.forEach(function (poi) {
      var poiMarker = L.marker([poi.lat, poi.lon]).addTo(map);
      poiMarker.bindPopup(poi.name);
    });
  })
  .catch(function (err) {
    console.error('Error finding nearby points of interest:', err);
  });


}
    
if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(

        (position) => {
            
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            console.log(`latitude: ${lat}, longitude: ${lon}`);
            initMap(lat,lon)
        },

        (error) =>{
            console.error("Error getting user location:", error)
        }
    )
} else{
    console.error("Geolocation is not supported by this browser.");
}
    
    
    
    



