function driverFunction(){
    window.location.href='driver.html';
};



const initMap = (lat,lon) =>{
    var map = L.map('map').setView([lat, lon], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([lat, lon]).addTo(map);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick)

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