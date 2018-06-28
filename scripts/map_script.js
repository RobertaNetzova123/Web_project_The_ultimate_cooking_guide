/**
 * Created by ProBook on 29.6.2018 г..
 */

function initMap() {
    var location = {lat: 42.704778, lng: 23.367369};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
