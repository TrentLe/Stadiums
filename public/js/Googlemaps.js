// Define the location of Geeksforgeeks office
const gfgOfficeLocation = {
  lat: 28.50231,
  lng: 77.40548
};

// Initialize the map
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17.56,
    center: gfgOfficeLocation
  });
}
