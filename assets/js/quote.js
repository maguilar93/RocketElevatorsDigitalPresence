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

let elevatorCom = document.getElementsByName("contact[elevatorCom]")[0];
let cages = document.getElementsByName("contact[cages]")[0];
cages.addEventListener('input', function() {
    elevatorCom.value = cages.value;
});


// Get number of elevators for residential // 

 
function elevatorResidential() {

    let apartments = document.getElementsByName("contact[apartments]")[0];
    let floors = document.getElementsByName("contact[floors]")[0];
    let elevatorRes = document.getElementsByName("contact[elevatorRes]")[0];

    let avgDoors = parseInt(apartments.value)/parseInt(floors.value);
    let numElevators = avgDoors/6;
    let numColumns = Math.ceil(floors.value/20);
    

    if (apartments.value.length > 0 && floors.value.length > 0) {

        if (floors.value <= 20) {
            elevatorRes.value = Math.ceil(numElevators) * numColumns;
        } else {
            console.log(Math.ceil(numElevators))
            elevatorRes.value = Math.ceil(numElevators)* numColumns;
        }
        
}};


