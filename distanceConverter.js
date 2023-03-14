function setup() {
    document.getElementById("miles").onclick =
      function () {
        setUnits("Mi");
      };
    document.getElementById("kilometers").onclick =
      function () {
        setUnits("km");
      };
  }
  
  function setUnits(unit) {
    var label = document.getElementById("label");
    label.innerHTML = "" + unit;
  }
  
  function convert() {
    var kilometersButton = document.getElementById(
      "kilometers");
    var distance = document.getElementById(
      "distance");
  
    if (kilometersButton.checked) {
      convertToKilometers(distance.value);
    } else {
      convertToMiles(distance.value);
    }
  }
  
  function convertToKilometers(distanceInMiles) {
    var distanceInKiolmeters = 
      distanceInMiles *1.609;
    document.getElementById("answer").innerHTML =
      `${distanceInMiles} miles converts to ${distanceInKiolmeters .toFixed(1)} kilometers`;
  }
  
  function convertToMiles(distanceInKiolmeters) {
    var distanceInMiles =
      distanceInKiolmeters* 0.621;
    document.getElementById("answer").innerHTML =
    `${distanceInMiles} kilometers converts to ${distanceInKiolmeters .toFixed(1)} miles`;
     
  }