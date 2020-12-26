class Assignment {

    static container = document.querySelector("[data-track-container='Active Assignments']").getElementsByClassName("content")[0];

    constructor(index) {
        this.accordion = Assignment.container.getElementsByClassName("ajax_accordion")[index];
    }

    table() {
        return this.accordion.getElementsByClassName("table_basic")[0];
    }

    name() {
        return this.table().rows[0].cells[3].innerText;
    }

    className() {
        return this.table().rows[0].cells[4].innerText;
    }

    dueDate() {
        return this.table().rows[0].cells[5].innerText;
    }
}

function getAssignments() {
    // Sexy one-liner
    return Array(Assignment.container.childElementCount).fill().map((_, i) => new Assignment(i));
}

function compareClassNames(assignment1, assignment2) {
    if (assignment1.className() < assignment2.className()) {
        return -1;
    } else if (assignment1.className() > assignment2.className()) {
        return 1;
    } else {
        return 0;
    }
}

function reOrder() {
    getAssignments().sort(compareClassNames).forEach(item => {
        Assignment.container.appendChild(item.accordion);
    });
}

//reOrder(); turned off bc of butten

function addBorder() {
    //importing js
    document.head.insertAdjacentHTML("afterbegin", "<script type=\"text/javascript\" src=School-Loop-Plugin.js></script>");
    //adding button
    document.getElementsByClassName("sub_header")[3].insertAdjacentHTML("beforeend", "<button id=reOrderButton>Reorder Classes</button>");

    document.getElementById("reOrderButton").addEventListener("click", reOrder);
    //inserting 4 borders
    document.getElementById("container_page").insertAdjacentHTML("afterbegin", "<div id = rgbBorder1>ignore</div>")
    document.getElementById("container_page").insertAdjacentHTML("afterbegin", "<div id = rgbBorder2></div>")
    document.getElementById("container_page").insertAdjacentHTML("afterbegin", "<div id = rgbBorder3></div>")
    document.getElementById("container_page").insertAdjacentHTML("afterbegin", "<div id = rgbBorder4></div>")

}

addBorder();
