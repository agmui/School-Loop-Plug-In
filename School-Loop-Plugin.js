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
    /*divOne = document.getElementById('#div1');
    divTwo = document.getElementById('#div2');
    divThree = document.getElementById('#div3');
    container = divOne.parentNode;
    container.appendChild(divTwo);
    container.appendChild(divOne);
    container.appendChild(divThree);*/

    container = getAssignments()[0].parentNode;
    temp.forEach(n => {
      console.log(getSchoolClass(n), n);
      container.appendChild(getAssignments()[n]);
    });
}




let myArray = [];
for (i = 0; i < getAssignments().length; i++) {
    myArray.push([getSchoolClass(i), i]);
}
console.log(myArray)

let temp = []
for (i = 0; i < getAssignments().length; i++) {
   temp.push(myArray.sort()[i][1]);
}
//console.log(temp)
reOrder(temp);
