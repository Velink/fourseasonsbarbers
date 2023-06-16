function initMap() {
    try {
        //The location 
    const beautySalon = { lat: 51.653773, lng: -0.091950 };

    if(document.getElementById('map')){
        const map1 = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: beautySalon,
            disableDefaultUI: true,
            zoomControl: true,
            fullscreenControl: true,
            streetViewControl: true,
        });
           //The marker positioned at map1
            const marker = new google.maps.Marker({
            position: beautySalon,
            map: map1,
    });
    } 
    } catch (error) {
        console.log(error);
    }
}
