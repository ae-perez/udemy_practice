function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}.`;
}

var country = 'Canada';
var population = 66000000;
var capitalCity = 'Ottawa';

var describe = describeCountry(country, population, capitalCity);
console.log(describe);

country = 'El Salvador';
population = 100000;
capitalCity = 'San Salvador';
describe = describeCountry(country, population, capitalCity);
console.log(describe);

country = 'United States of America';
population = 50000000;
capitalCity = 'Washington';
describe = describeCountry(country, population, capitalCity);
console.log(describe);

//Function Declarations vs Expressions
function percentageOfWorld1(population) {
  //code here
  var percentage = (population / 79000) * 100;

  return percentage;
}

var percentageOfWorld2 = function () {
  return (population / 79000) * 100;
};

var countrypercentage = percentageOfWorld1(population);
