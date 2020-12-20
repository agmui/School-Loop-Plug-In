function getAssignments() {
    const assignmentContainer = document.querySelector("[data-track-container='Active Assignments']");
    let assignments = assignmentContainer.getElementsByClassName("content")[0].getElementsByClassName("ajax_accordion");

    return assignments;
}

function getSchoolClass(x) {
    var table = getAssignments()[x].getElementsByClassName("ajax_accordion_row jsTrackerRefresh")[0].getElementsByClassName("table_basic")[0]
    var schoolClass = table.getElementsByClassName("column padding_5")[3].innerText
    var dueDate = table.getElementsByClassName("column padding_5")[4].innerText
    return schoolClass + ' ' + dueDate;
}

function reOrder() {
    /*divOne = document.getElementById('#div1');
    divTwo = document.getElementById('#div2');
    divThree = document.getElementById('#div3');
    container = divOne.parentNode;
    container.appendChild(divTwo);
    container.appendChild(divOne);
    container.appendChild(divThree);*/

    let help = []
    for (i = 0; i < getAssignments().length; i++) {
        help[i] = getAssignments()[i];
    }

    container = help[0].parentNode;
    for (i = 0; i < getAssignments().length; i++){
        container.appendChild(help[i]);
    }
}

let myArray = []
for (i = 0; i < getAssignments().length; i++) {
    myArray.push(getSchoolClass(i));
}

console.log(myArray.sort());
reOrder()
