      function initialize() {
        var mapCanvas = document.getElementById('map');
        var pos = new google.maps.LatLng(33.85844, -118.08112)
        var mapOptions = {
          center: pos,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var marker = new google.maps.Marker({
          position: pos,
          map: map,
          icon: iconBase + 'schools_maps.png'
        });
      }
      google.maps.event.addDomListener(window, 'load', initialize);