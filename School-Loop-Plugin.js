function getAssignments() {
    const assignmentContainer = document.querySelector("[data-track-container='Active Assignments']");
    let assignments = assignmentContainer.getElementsByClassName("ajax_accordion");
    return assignments;
}

function getAssignmentInfo(index) {
    const table = getAssignments()[index].getElementsByClassName("table_basic")[0];
    let className = table.rows[0].cells[4].innerText;
    let dueDate = table.rows[0].cells[5].innerText;

    return className + " " + dueDate;
}

function reOrder(temp) {
    let help = [];
    for (i = 0; i < getAssignments().length; i++) {
      help.push(getAssignments()[i]);
    }    
    console.log(help);

    container = getAssignments()[0].parentNode;
    temp.forEach(n => {
      console.log(getAssignmentInfo(n), n);
      container.appendChild(help[n]);
    });
}


let myArray = [];
for (i = 0; i < getAssignments().length; i++) {
    myArray.push([getAssignmentInfo(i), i]);
}
console.log(myArray)

let temp = []
for (i = 0; i < getAssignments().length; i++) {
   temp.push(myArray.sort()[i][1]);
}
console.log(temp)
reOrder(temp);
