import fetch from 'jest-fetch-mock'
import { fetchEventData } from './api/util.js'

test('make sure the network request works', () => {
  expect.assertions(1)

  return fetchEventData().then((res) => {
    expect(res).toHaveProperty('data.events')
  })
});
