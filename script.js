// // Write your JavaScript code here!

window.addEventListener("load", function() {
    
    let form = document.querySelector("form");
    // let pilotInput = document.getElementById("pilotName");

    let pilotInput = document.querySelector("input[name=pilotName]");
    let copilotInput = document.querySelector("input[name=copilotName]");
    let fuelInput = document.querySelector("input[name=fuelLevel]");
    let cargoInput = document.querySelector("input[name=cargoMass]");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        console.log(pilotInput.value, copilotInput.value, fuelInput.value, cargoInput.value);
    });
});

//    let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
   


