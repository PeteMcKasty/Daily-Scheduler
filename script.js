$(function () {

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

  $(document).ready(function() {
    let storedText9 = localStorage.getItem('hour-9');
    if (storedText9) {
      $('#hour-9 textarea').val(storedText9);
    }
  });

  $(document).ready(function() {
    let storedText10 = localStorage.getItem('hour-10');
    if (storedText10) {
    $('#hour-10 textarea').val(storedText10);
    }
  }); 

  $(document).ready(function() {
    let storedText11 = localStorage.getItem('hour-11');
    if (storedText11) {
    $('#hour-11 textarea').val(storedText11);
    }
  });

  $(document).ready(function() {
    let storedText12 = localStorage.getItem('hour-12');
    if (storedText12) {
      $('#hour-12 textarea').val(storedText12);
    }
  });

  $(document).ready(function() {
    let storedText13 = localStorage.getItem('hour-13');
    if (storedText13) {
      $('#hour-13 textarea').val(storedText13);
    }
  });

  $(document).ready(function() {
    let storedText14 = localStorage.getItem('hour-14');
    if (storedText14) {
      $('#hour-14 textarea').val(storedText14);
    }
  });

  $(document).ready(function() {
    let storedText15 = localStorage.getItem('hour-15');
    if (storedText15) {
      $('#hour-15 textarea').val(storedText15);
    }
  });

  $(document).ready(function() {
    let storedText16 = localStorage.getItem('hour-16');
    if (storedText16) {
    $('#hour-16 textarea').val(storedText16);
    }
  });

  $(document).ready(function() {
    let storedText17 = localStorage.getItem('hour-17');
    if (storedText17) {
    $('#hour-17 textarea').val(storedText);
    }
  });
});

let today = dayjs().format('MMM D, YYYY, hh:mm a')
$('#today').text(today);