function getAssignments() {
    const assignmentContainer = document.querySelector("[data-track-container='Active Assignments']");
    let assignments = assignmentContainer.getElementsByClassName("ajax_accordion");
    return assignments;
}

function getAssignmentInfo(assignment) {
    const table = assignment.getElementsByClassName("table_basic")[0];
    let className = table.rows[0].cells[4].innerText;
    let dueDate = table.rows[0].cells[5].innerText;

    return className + " " + dueDate;
}

function compare(assignment1, assignment2) {
    if (getAssignmentInfo(assignment1) < getAssignmentInfo(assignment2)) {
        return -1;
    } else if (getAssignmentInfo(assignment1) > getAssignmentInfo(assignment2)) {
        return 1;
    } else {
        return 0;
    }
}

function reOrder() {
    let container = getAssignments()[0].parentNode;
    let sortedArray = Array.from(getAssignments()).sort(compare);

    sortedArray.forEach(item => {
        container.appendChild(item);
    });
}

reOrder();

