class RoadTrip {
  constructor(destinations) {
    // Set the array of cities to visit.
    this.destinations = destinations;
  }
  // Start the trip at 0.
  _currentStep = 0;

  // Set the current city we are in.
  set current(city) {
    this._currentStep = this.destinations.indexOf(city);
  }

  // Get the current city.
  get currentCity() {
    return this.destinations[this._currentStep];
  }

  // Get the next city to visit.
  get nextCity() {
    return this.destinations[this._currentStep + 1];
  }
}

// Create an instance of RoadTrip.
const trip = new RoadTrip(["NYC🗽", "Boston🍩", "Miami🌴"]);

console.log(trip.currentCity);
// This will output to the console: 'NYC🗽'.

trip.current = trip.nextCity;
// By combining the getter and setter, we move to the next city.

console.log(trip.currentCity);
// This will output to the console: 'Boston🍩'.
