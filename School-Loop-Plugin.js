// document.body.style.border = "5px solid red";
console.log("EXTENSION LOADED");

var assignments = document.querySelectorAll("[data-track-container='Active Assignments']")[0];
var assignmentArray = assignments.getElementsByClassName("content")[0].getElementsByClassName("ajax_accordion");

assignments.getElementsByClassName("sub_header")[0].innerHTML = "HELLO";

console.log(assignmentArray);

