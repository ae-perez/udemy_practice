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
  var percentage = (population / 7900) * 100;

  return percentage;
}

var percentageOfWorld2 = function () {
  return `world2: ${Math.round((population / 7900) * 100)}%`;
};

//arrow functions
var percentageworld3 = (population) => {
  return console.log(`world3: ${Math.round((population / 7900) * 100)}%\n`);
};

console.log(`world1: ${Math.round(percentageOfWorld1(population))}%`);
console.log(percentageOfWorld2());
percentageworld3(population);
population = 1000000;
console.log(`world1: ${Math.round(percentageOfWorld1(population))}%`);
console.log(percentageOfWorld2());
percentageworld3(population);
population = 245000000;
console.log(`world1: ${Math.round(percentageOfWorld1(population))}%`);
console.log(percentageOfWorld2());
percentageworld3(population);

//functions calling other functions
var describePopulation = (country, population) => {
  var percent = Math.round(percentageOfWorld1(population));
  return console.log(
    `${country} has ${population} million people, which is about ${percent}% of the world`
  );
};

describePopulation('Canada', 37000000);
describePopulation('Australia', 25000000);
describePopulation('El Salvador', 6000000);

//introduction to arrays
var populations = [37000000, 6000000, 55000000, 18000000];
console.log(populations); //remove
console.log(populations.length === 4);
var percentages = (populations) => {
  for (var i = 0; i < 4; i++) {
    console.log(`${Math.round(percentageOfWorld1(populations[i]))}%\n`);
  }
};
percentages(populations);

//basic array operations(methods)
var neighbours = ['Guatemla', 'Honduras', 'Nicaragua'];
console.log(neighbours);
neigbours = neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop(); //for pop if you want to store the remove value, initlize otherwise don't add the 'var x =' bit
console.log(neighbours);

var match = 0;
for (var i = 0; i < neighbours.length; i++) {
  if (neighbours[i] == 'Germany') {
    match = 1;
  }
}

console.log(
  match == 0
    ? 'Probably not a central European country!'
    : 'Germany is a neighbouring country!'
);
