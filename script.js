function customerFunction(){
    window.location.href = 'customer.html';
};


const initMap = (lat,lon) =>{

    map = new mappls.Map('map', {
        center: [lat, lon],
        zoomControl: true,
        location: true
      });
      Marker1 = new mappls.Marker({
        map: map,
        position: {
          lat,
          lon
        },
        fitbounds: true,
        
      });

      map_object.panTo({lat: lat,lng: lng});

}
  
 if("geolocation" in navigator){

    navigator.geolocation.getCurrentPosition(

        (position) =>{
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            console.log(`latitude: ${lat}, longitude: ${lon}`);
            initMap(lat,lon)
        
        },

        (error) => {
            console.error("Error getting user location:", error);
        },

        
);

}else{
    console.error("Geolocation is not supported by this browser.");
}  


