// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $("#hour-9 .saveBtn").on("click", function () {
    let hourText9 = ""
    let textarea9 = "";
    textarea9 = $('#hour-9 textarea').val();
    hourText9 = $('#hour-9 .hour').text();
    localStorage.setItem('hour-9', hourText9 + textarea9);
  })
  $("#hour-10 .saveBtn").on("click", function () {
    let hourText10 = ""
    let textarea10 = "";
    textarea10 = $('#hour-10 textarea').val();
    hourText10 = $('#hour-10 .hour').text();
    localStorage.setItem('hour-10', hourText10 + textarea10);
  })  
  $("#hour-11 .saveBtn").on("click", function () {
    let hourText11 = ""
    let textarea11 = "";
    textarea11 = $('#hour-11 textarea').val();
    hourText11 = $('#hour-11 .hour').text();
    localStorage.setItem('hour-11', hourText11 + textarea11);
  })
  $("#hour-12 .saveBtn").on("click", function () {
    let hourText12 = "";
    let textarea12 = "";
    textarea12 = $('#hour-12 textarea').val();
    hourText12 = $('#hour-12 .hour').text();
    localStorage.setItem('hour-12', hourText12 + textarea12);
  })
  $("#hour-13 .saveBtn").on("click", function () {
    let hourText13 = ""
    let textarea13 = "";
    textarea13 = $('#hour-13 textarea').val();
    hourText13 = $('#hour-13 .hour').text();
    localStorage.setItem('hour-13', hourText13 + textarea13);
  })
  $("#hour-14 .saveBtn").on("click", function () {
    let hourText14 = ""
    let textarea14 = "";
    textarea14 = $('#hour-14 textarea').val();
    hourText14 = $('#hour-14 .hour').text();
    localStorage.setItem('hour-14', hourText14 + textarea14);
  })
  $("#hour-15 .saveBtn").on("click", function () {
    let hourText15 = ""
    let textarea15 = "";
    textarea15 = $('#hour-15 textarea').val();
    hourText15 = $('#hour-15 .hour').text();
    localStorage.setItem('hour-15', hourText15 + textarea15);
  })
  $("#hour-16 .saveBtn").on("click", function () {
    let hourText16 = ""
    let textarea16 = "";
    textarea16 = $('#hour-16 textarea').val();
    hourText16 = $('#hour-16 .hour').text();
    localStorage.setItem('hour-16', hourText16 + textarea16);
  })
  $("#hour-17 .saveBtn").on("click", function () {
    let hourText17 = ""
    let textarea17 = "";
    textarea17 = $('#hour-17 textarea').val();
    hourText17 = $('#hour-17 .hour').text();
    localStorage.setItem('hour-17', hourText17 + textarea17);
  })


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  $(".time-block").each(function () {
    let currentTime = dayjs().hour()
    let timeBlock = parseInt($(this).attr("hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"));
    if (timeBlock < currentTime) {
        $(this).addClass("past");
    } else if (timeBlock === currentTime) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
});
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //
  // TODO: Add code to display the current date in the header of the page.
});

let today = dayjs().format('MMM D, YYYY, hh:mm a')
$('#today').text(today);