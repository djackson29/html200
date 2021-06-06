let vacationSpots = ['Hawaii', 'The Philippines', 'Italy', 'Virgin Islands', 'Greece'];

vacationSpots.push('Croatia');

vacationSpots.splice(2, 1);

const vacationSpotList = vacationSpots.join(', ');

console.log(vacationSpots);
console.log(vacationSpotList);
