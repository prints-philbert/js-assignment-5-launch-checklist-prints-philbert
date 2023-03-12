// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
    `
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

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("Please include an input for each field.");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Please enter valid names and valid inputs for fuel level and cargo level.");
    } else {
            list.style.visibility = 'visible';
            
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`; 
            
            if ( fuelLevel < 10000 || cargoLevel > 10000 ) {
                launchStatus.innerHTML = "Shuttle not ready for launch";
                launchStatus.style.color = "red";
                if ( fuelLevel < 10000 ) {
                    fuelStatus.innerHTML = "Not enough fuel for launch";
                } else {
                    fuelStatus.innerHTML = "Fuel level high enough for launch";

                }
                if ( cargoLevel > 10000 ) {
                    cargoStatus.innerHTML = "Cargo mass too heavy for launch"
                } else {
                    cargoStatus.innerHTML = "Cargo mass low enough for launch"

                }
            }
            if ( fuelLevel >= 10000 && cargoLevel <= 10000 ) {
                launchStatus.innerHTML = "Shuttle ready for launch";
                launchStatus.style.color = "green";    
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                cargoStatus.innerHTML = "Cargo mass low enough for launch"
            }
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        console.log(planetsReturned);
    });
    return planetsReturned;
}

function pickPlanet(planets) {
   let index = Math.floor(Math.random()*planets.length);
   return planets[index];
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;

