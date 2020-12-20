/*var assignmentContainer = document.querySelectorAll("[data-track-container='Active Assignments']")[0];
var assignments = assignmentContainer.getElementsByClassName("content")[0].getElementsByClassName("ajax_accordion");

var table = assignments[0].getElementsByClassName("ajax_accordion_row jsTrackerRefresh")[0].getElementsByClassName("table_basic")[0]
var x = table.getElementsByClassName("column padding_5")[3].innerText*/


//assignmentContainer.getElementsByClassName("sub_header")[0].innerHTML = "HELLO";

function getSchoolClass(x) {
  var assignmentContainer = document.querySelectorAll("[data-track-container='Active Assignments']")[0];
  var assignments = assignmentContainer.getElementsByClassName("content")[0].getElementsByClassName("ajax_accordion");

  var table = assignments[x].getElementsByClassName("ajax_accordion_row jsTrackerRefresh")[0].getElementsByClassName("table_basic")[0]
  var schoolClass = table.getElementsByClassName("column padding_5")[3].innerText
  var dueDate = table.getElementsByClassName("column padding_5")[4].innerText
    return schoolClass +' '+ dueDate;
  }

function getNumberOfAssignments(){ //try to use superfunctions
  var assignmentContainer = document.querySelectorAll("[data-track-container='Active Assignments']")[0];
  var assignments = assignmentContainer.getElementsByClassName("content")[0].getElementsByClassName("ajax_accordion");
  return assignments.length
}

function reOrder() {
  /*divOne = document.getElementById('#div1');
  divTwo = document.getElementById('#div2');
  divThree = document.getElementById('#div3');
  container = divOne.parentNode;
  container.appendChild(divTwo);
  container.appendChild(divOne);
  container.appendChild(divThree);*/
  var assignmentContainer = document.querySelectorAll("[data-track-container='Active Assignments']")[0];
  var assignments = assignmentContainer.getElementsByClassName("content")[0].getElementsByClassName("ajax_accordion");
  let help = []
  for (let i = 0; i < getNumberOfAssignments(); i++) {
    help[i] = assignments[i];
  }
  container = help[0].parentNode;
  for (let i = 0; i < getNumberOfAssignments(); i++){
    container.appendChild(help[i]);
  }
}


let myArray = []
for (let i = 0; i < getNumberOfAssignments(); i++) {
  myArray.push(getSchoolClass(i));
}
console.log(myArray.sort());
reOrder()
