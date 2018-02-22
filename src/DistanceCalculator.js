import haversine from 'haversine'

export function distanceCalculator(latitude, longitude) {

  const end = {
  latitude: latitude,
  longitude: longitude
  }

  const start = {
    latitude: JSON.parse(localStorage.getItem('location')).lat,
    longitude: JSON.parse(localStorage.getItem('location')).lng
  }

  return(haversine(start, end, {unit: 'mile'}))
}
