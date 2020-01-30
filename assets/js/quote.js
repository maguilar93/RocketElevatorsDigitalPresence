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
