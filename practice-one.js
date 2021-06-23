//values and variables
    const country = 'Canada';
    const continent = 'North America';
    var population = 100000;

    //console.log(country + ' ' + continent + ' ' + population);

//data types
    var isIsland = false;
    var language;
    //console.log("\n");
    //console.log(typeof(language) + ' ' + typeof(isIsland) + ' ' + typeof(population) + ' ' + typeof(continent) + ' ' + typeof(country));

//let, const, var
    language = 'english';
    //country = 'El Salvador'; -- you get a TypeError: Assignment to constant variable
    //console.log(country);

//basic operators
    /*console.log("\n");
    console.log(population / 2);
    console.log(population++);
    console.log(population > 6000000 ? "Population is BIGGER than Finland!" : "Population is LESSER than Finland!");
    console.log(population < 33000000 ? "Population is LESSER than the average!" : "Population is ABOVE average!");
    var description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
    console.log(description);*/


//string and template literals
    /*console.log("\n");
    description = `${country} is in ${continent}, and its ${population} million people speak ${language}`; //MUCH EASIER
    console.log(description);*/

//taking decisions: if-else statements
    /*console.log("\n");
    console.log(population > 33000000 ? `${country}'s population is above average` : `${country}'s population is below average`);*/

//type conversion and coercion
    /*console.log("\n");
    console.log('9' - '5'); //string 4
    console.log('19'-'13'+'17'); //does the math
    console.log('19'-'13'+17); //does not do the math produces error --wrong it actually does the math
    console.log(5+6+'4'+9-4-2); //--does the math*/

//equality operators: == vs ===
    /*console.log("\n");
    var numNeighbours = prompt("How many neighbour countires does your country have?");
    numNeighbours = Number(numNeighbours); //Number() converts your string to a number type
    console.log(numNeighbours === 1 ? "Only 1 border!" //you'll get no order with === because prompt will convert everything to string
    : numNeighbours > 1 ? "More than 1 border!"
    : "No border");*/

//logical operator
    //console.log("\n");
    console.log((language === 'english' && population < 55000000 && !(isIsland)) ? `${country} is for you!` : `${country} does not meet your criteria!`);

//the switch statement
    switch(language) {
        case 'chinese':
        case 'mandarin': console.log('Most number of native speakers!');
            break;
        case 'spanish': console.log('2nd place in number of native speakers.');
            break;
        case 'english': console.log('3rd place.');
            break;
        case 'hindi': console.log('4th place');
            break;
        case 'arabic': console.log('5th most spoken language.');
            break;
        default:
            console.log(`${language} is a great language too!`);
    };    


//the conditional(ternary) operator
    console.log(population > 33000000 ? `${country}'s population is above average` : `${country}'s population is below average`);