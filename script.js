function customerFunction(){
    window.location.href = 'customer.html';
};

const initializeMap = (lat,lon)=>{

    const map = L.map('map').setView([lat, lon], 20);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      const marker = L.marker([lat, lon]).addTo(map);
      marker.bindPopup("User Location").openPopup();

}

if("geolocation" in navigator){

    navigator.geolocation.getCurrentPosition(

        (position) =>{
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            console.log(`latitude: ${lat}, longitude: ${lon}`);
            initializeMap(lat,lon)
        },

        (error) => {
            console.error("Error getting user location:", error);
        },

        
);

}else{
    console.error("Geolocation is not supported by this browser.");
}


