export function fetchEventData() {
  let mobilizeApiUrl = 'https://mobilize-mock-api.herokuapp.com/api/events'
  return fetch(mobilizeApiUrl)
  .then(res => res.json())
};


export function fetchZipcodeLatLng(zipcode) {
  let userLatLngViaSearch = 'http://maps.googleapis.com/maps/api/geocode/json?address=' + zipcode
  return fetch(userLatLngViaSearch)
  .then(res => res.json())
};
