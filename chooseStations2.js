
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = (stations) => {
  return stations
    .filter(station => {
      const capacity = station[1];
      const type = station[2];

      return capacity >= 20 && ['school', 'community centre'].includes(type);
    })
    .map(station => station[0])
  ;
}
