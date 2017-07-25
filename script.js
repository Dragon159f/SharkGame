// In this example, setInterval runs the code in "function () {...}"
// every 30 milliseconds.

$(document).ready(function () {
  setInterval(function () {
    alert("")
    // Games have a lot of code that runs over and over again.
    // This code does everything from updating the location of
    // the player (i.e. moving the player when the user presses
    // the arrow keys) to simulating physics (i.e. making objects
    // fall).
  }, 30);
});
