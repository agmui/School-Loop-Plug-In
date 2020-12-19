var assignmentContainer = document.querySelectorAll("[data-track-container='Active Assignments']")[0];
var assignments = assignmentContainer.getElementsByClassName("content")[0].getElementsByClassName("ajax_accordion");

assignmentContainer.getElementsByClassName("sub_header")[0].innerHTML = "HELLO";

console.log(assignments);

