// Show fields depending on building type //

let building = document.querySelector("#building");
let residential = document.querySelector("#residentialForm");
let commercial = document.querySelector("#commercialForm");
let corporate = document.querySelector("#corporateForm");
let hybrid = document.querySelector("#hybridForm");


building.addEventListener("change", function() {
    if (building.value == 0) {
        residential.style.display = "none";
        commercial.style.display = "none";
        corporate.style.display = "none";
        hybrid.style.display = "none";
    } else if (building.value == 1) {
        residential.style.display = "block";
        commercial.style.display = "none";
        corporate.style.display = "none";
        hybrid.style.display = "none";
    } else if (building.value == 2) {
        commercial.style.display = "block";
        residential.style.display = "none";
        corporate.style.display = "none";
        hybrid.style.display = "none";
    } else if (building.value == 3) {
        corporate.style.display = "block";
        commercial.style.display = "none";
        residential.style.display = "none";
        hybrid.style.display = "none";
    } else if (building.value == 4) {
        hybrid.style.display = "block";
        residential.style.display = "none";
        commercial.style.display = "none";
        corporate.style.display = "none";
    }
});

// Get number of elevators for commercial // 

let elevatorCom = document.getElementsByName("commercial[elevatorCom]")[0];
let cages = document.getElementsByName("commercial[cages]")[0];
cages.addEventListener('input', function() {
    elevatorCom.value = cages.value;
});


// Get number of elevators for residential // 

function elevatorResidential() {

    let apartments = document.getElementsByName("residential[apartments]")[0];
    let floorsRes = document.getElementsByName("residential[floors]")[0];
    let elevatorRes = document.getElementsByName("residential[elevatorRes]")[0];

    let avgDoors = parseInt(apartments.value)/parseInt(floorsRes.value);
    let numElevators = avgDoors/6;
    let numColumns = Math.ceil(floorsRes.value/20);
    

    if (apartments.value.length > 0 && floorsRes.value.length > 0) {

        elevatorRes.value = Math.ceil(numElevators) * numColumns;

    }
};

// Get number of elevators for hybrid and corporate // 

// If the type of building is Corporate or Hybrid, multiply the number of
//     occupants per floor by the number of floors ( including the number of
//     basements) to obtain the total number of occupants. The number of
//     elevators required is determined by the number of occupants divided
//     by 1000. The number of stories ( including the number of basements)
//     is divided by 20 to obtain the number of elevator columns required.
//     The total number of elevators is determined by the number of
//     elevators divided by the number of columns.

function elevatorsCorporate() {

    let occupants = document.getElementsByName("contact[occupants]")[0];
    let floors = document.getElementsByName("contact[floors]")[0];
    let basements = document.getElementsByName("contact[basements]")[0];
    let elevatorsHyb = document.getElementsByName("contact[elevatorsHyb]")[0];
        
    let numStories = parseInt(floors.value)+parseInt(basements.value);
    let totalOccupants = occupants.value*numStories;
    let numElevators = Math.ceil(totalOccupants/1000);
    let numColumns = Math.ceil(numStories / 20);


    if (occupants.value.length > 0 && basements.value.length > 0 && floors.value.length > 0) {
        let elevPerCol = Math.ceil(numElevators/numColumns);
        elevatorsHyb.value = elevPerCol * numColumns;
    }
}

function elevatorsHybrid() {

    let occupants = document.getElementsByName("contact[occupants]")[1];
    let floors = document.getElementsByName("contact[floors]")[1];
    let basements = document.getElementsByName("contact[basements]")[1];
    let elevatorsHyb = document.getElementsByName("contact[elevatorsHyb]")[1];
        
    let numStories = parseInt(floors.value)+parseInt(basements.value);
    let totalOccupants = occupants.value*numStories;
    let numElevators = Math.ceil(totalOccupants/1000);
    let numColumns = Math.ceil(numStories / 20);


    if (occupants.value.length > 0 && basements.value.length > 0 && floors.value.length > 0) {
        let elevPerCol = Math.ceil(numElevators/numColumns);
        elevatorsHyb.value = elevPerCol * numColumns;
    }
}

