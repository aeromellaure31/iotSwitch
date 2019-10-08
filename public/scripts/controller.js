// basic functionalities
$(document).ready(function () {

  document.getElementById('btnOn').addEventListener("click", function (e) {
    e.preventDefault();
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
    var display = "aeromel/device/status";
    client.subscribe(display);
    client && client.publish(display, "Turn on " + time);
  })

  document.getElementById('btnOff').addEventListener("click", function (e) {
    e.preventDefault();
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
    var display = "aeromel/device/status";
    client.subscribe(display);
    client && client.publish(display, "Turn off " + time);
  })

})