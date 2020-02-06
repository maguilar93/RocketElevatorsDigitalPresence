// Show fields depending on building type //

let building = document.querySelector("#building");
let residential = document.querySelector("#residentialForm");
let commercial = document.querySelector("#commercialForm");
let corporate = document.querySelector("#corporateForm");
let hybrid = document.querySelector("#hybridForm");
let elevator = document.getElementsByClassName("elevator")[0];


building.addEventListener("change", function () {
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

    for (var b = 0; b < buttons.length; b++) {
        buttons[b].checked = false;
        elevator.value = 0;
        prices.value = "$ " + 0;
        installation.value = "$ " + 0;
        total.value = "$ " + 0;
    }
});


// Get number of elevators for commercial // 

let cages = document.getElementsByName("commercial[cages]")[0];
cages.addEventListener('input', function () {
    elevator.value = cages.value;
});


// Get number of elevators for residential // 

function elevatorResidential() {

    let apartments = document.getElementsByName("residential[apartments]")[0];
    let floorsRes = document.getElementsByName("residential[floors]")[0];

    let avgDoors = parseInt(apartments.value) / parseInt(floorsRes.value);
    let numElevators = avgDoors / 6;
    let numColumns = Math.ceil(floorsRes.value / 20);


    if (apartments.value.length > 0 && floorsRes.value.length > 0) {

        elevator.value = Math.ceil(numElevators) * numColumns;

    }
};

// Get number of elevators for hybrid and corporate // 

function elevatorsCorporate() {

    let occupants = document.getElementsByName("contact[occupants]")[0];
    let floors = document.getElementsByName("contact[floors]")[0];
    let basements = document.getElementsByName("contact[basements]")[0];

    let numStories = parseInt(floors.value) + parseInt(basements.value);
    let totalOccupants = occupants.value * numStories;
    let numElevators = Math.ceil(totalOccupants / 1000);
    let numColumns = Math.ceil(numStories / 20);


    if (occupants.value.length > 0 && basements.value.length > 0 && floors.value.length > 0) {
        let elevPerCol = Math.ceil(numElevators / numColumns);
        elevator.value = elevPerCol * numColumns;
    }
}

function elevatorsHybrid() {

    let occupants = document.getElementsByName("contact[occupants]")[1];
    let floors = document.getElementsByName("contact[floors]")[1];
    let basements = document.getElementsByName("contact[basements]")[1];

    let numStories = parseInt(floors.value) + parseInt(basements.value);
    let totalOccupants = occupants.value * numStories;
    let numElevators = Math.ceil(totalOccupants / 1000);
    let numColumns = Math.ceil(numStories / 20);


    if (occupants.value.length > 0 && basements.value.length > 0 && floors.value.length > 0) {
        let elevPerCol = Math.ceil(numElevators / numColumns);
        elevator.value = elevPerCol * numColumns;
    }
}


// Get unit price for different packages
let buttons = document.getElementsByClassName("buttons");
let prices = document.getElementsByClassName("price")[0];
let installation = document.getElementsByClassName("installation")[0];
let total = document.getElementsByClassName("total")[0];
let unit = [7565, 12345, 15400];
let fees = [0.10, 0.13, 0.16];

function packagePrice() {
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].checked) {
            let price = parseFloat(elevator.value * unit[i]);
            prices.value = "$ " + price.toFixed(2);
            let fee = parseFloat(price * (1 + fees[i])) - price;
            installation.value = "$ " + fee.toFixed(2);
            let totalPrice = parseFloat(price) + parseFloat(fee);
            total.value = "$ " + totalPrice.toFixed(2);
        }
    }
}