var projectButton = document.querySelector("#projectButton");
var stageButton = document.querySelector("#stageButton");
var project = document.querySelector("#project");
var stage = document.querySelector("#stage");


//voegt classes toe
project.classList.add("onzichtbaar");
stage.classList.add("onzichtbaar");

//maakt function aan toogle form
function toggleForm () {
    if (projectButton.checked) {
     project.classList.remove("onzichtbaar");
     stage.classList.add("onzichtbaar");
     console.log("Project toggle");
 }
    else if (stageButton.checked) {
     stage.classList.remove("onzichtbaar");
     project.classList.add("onzichtbaar");
     console.log("Stage toggle");
 }
}

projectButton.addEventListener("click", toggleForm, false);
stageButton.addEventListener("click", toggleForm, false);
