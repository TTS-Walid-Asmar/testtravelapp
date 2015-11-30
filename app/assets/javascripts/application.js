// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
$(document).ready(function (){

    function initialize() {

        var image = "../images/bronx-flag.jpg";

        var myLatlng = new google.maps.LatLng(40.853088, -73.900197);

        var mapOptions = {
            center: myLatlng,
            zoom: 8,
            scrollwheel: false
        };


        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Bronx',
            animation: google.maps.Animation.DROP,
        });
        var contentString = '<h2>Bronx, NYC</h2>' +
       '<p>This is the coolest place on earth, you guys.</p>'
     ;

     var infowindow = new google.maps.InfoWindow({
       content: contentString
     });


 google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
     });
}


google.maps.event.addDomListener(window, 'load', initialize);
});

