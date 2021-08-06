var mymap = L.map('mapid').setView([21.4225, 39.8262], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var countryy, latt, longg, casess, deathss, recoveredd;
fetch("https://disease.sh/v2/countries")
.then(function (response) {
  response.json().then(dataAsJson => {//215
    var info;
    var countryInfoo;
    for(var i = 0; i<215;i++){
      info = dataAsJson[i];
      countryInfoo=info.countryInfo

      countryy = info.country;
      latt= countryInfoo.lat;
      longg= countryInfoo.long;
      casess = info.cases;
      deathss = info.deaths;
      recoveredd = info.recovered;

      L.circle([latt, longg], 100000, {//usa
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
      }).addTo(mymap).bindPopup("<Strong>"+ countryy+ "</strong> <br \> Confirmed: " + casess + " <br \> Recovered: " + recoveredd + " <br \> Deaths: "+deathss);
    }     
  });
});


