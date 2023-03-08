// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

/* validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate. */

function validateInput(testInput) {
    if ( testInput === "" ) {
        return "Empty";
    } else if ( isNaN(testInput) ) {
        return "Not a Number";
   } else if ( !isNaN(testInput) ) {
        return "Is a Number";
   }
}

console.log(`'A' is ${validateInput('A')}`);
console.log(`1 ${validateInput(1)}`);
console.log(`'' is ${validateInput('')}`);

/* formSubmission() will take in a document parameter and strings
representing the pilot, co-pilot, fuel level, and cargo mass. 
Using the values in those strings and the document parameter for your HTML document, 
update the shuttle requirements as described below. */

/* The list of shuttle requirements, the div with the id faultyItems, should be updated if something is not ready for launch. 
Using template literals, update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.

If the user submits a fuel level that is too low (less than 10,000 liters), change faultyItems to visible with an updated fuel status 
stating that there is not enough fuel for the journey. The text of the h2 element, launchStatus, should also change to 
"Shuttle not ready for launch" and the color should change to red.

If the user submits a cargo mass that is too large (more than 10,000 kilograms), change the list to visible with an updated 
cargo status stating that there is too much mass for the shuttle to take off. The text of launchStatus should also change to 
"Shuttle not ready for launch" and the color should change to red.

If the shuttle is ready to launch, change the text of launchStatus to green and display "Shuttle is ready for launch". */

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

}



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;

