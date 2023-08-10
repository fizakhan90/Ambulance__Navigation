function customerFunction(){
    window.location.href = 'customer.html';
};

function driverFunction(){
    window.location.href='driver.html';
};

function initMap(lat,lon){

    map = new mappls.Map('map', {
        center:{
            lat: lat,
            lng: lon
        },
        zoom : 18
    });
    
    marker = new mappls.Marker({
            map: map,
            position : {"lat": lat,"lng": lon},
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
