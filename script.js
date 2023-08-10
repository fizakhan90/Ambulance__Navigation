function customerFunction(){
    window.location.href = 'customer.html';
};

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
            
  

