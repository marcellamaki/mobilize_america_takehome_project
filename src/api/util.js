export function fetchEventData() {
  let mobilizeApiUrl = 'https://mobilize-mock-api.herokuapp.com/api/events?limit=20'
  return fetch(mobilizeApiUrl)
  .then(res => res.json())
};
