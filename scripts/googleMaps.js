function initMap() {
    try {
        //The location 
        //51.51503746916468, -0.07305030657195585
    const beautySalon = { lat: 51.51503746916468, lng: -0.07305030657195585 };

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
