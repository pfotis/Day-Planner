var timeArray =["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];

var now = moment().format('H');

var mySchedule =["event","event","event","event","event","event","event","event","event"];

$("#currentDay").text(moment().format('dddd, MMMM Do'));
var textQ = localStorage.getItem("saveMySchedule");
mySchedule = JSON.parse(textQ);


// function create the row with all the elements
function rowFunction(){
    for (var i=0; i<timeArray.length; i++ ){
        var rowDiv = $("<div>");
        rowDiv.addClass("row");
        $(".container").append(rowDiv);
        var emptyDiv = $("<div>");
        emptyDiv.addClass("col-lg-1 col-sm-1 col-xs-1");
        rowDiv.append(emptyDiv);
        var timeDiv = $("<div>");
        var timeP = $("<p>");
        timeDiv.addClass("col-lg-1 col-sm-1 col-xs-1 hour");
        timeP.addClass("center");
        rowDiv.append(timeDiv);
        timeDiv.append(timeP);
        timeP.text(timeArray[i]);
        var noteDiv = $("<input>");
        noteDiv.addClass("col-lg-8 col-sm-8 col-xs-8 textarea past");
        noteDiv.attr("value", "hello");
        rowDiv.append(noteDiv);
        var buttonDiv = $("<button>")
        buttonDiv.addClass("col-lg-1 col-sm-1 col-xs-1 saveBtn");
        buttonDiv.text("Save");
        rowDiv.append(buttonDiv);
    }
}

rowFunction();

$(document).ready(function(){
    if (now < 9){
        $("input:lt(9)").removeClass("past").addClass("future");
    }
    else if (now == 9){
        $("input:eq(0)").removeClass("past").addClass("present");
        $("input:gt(0)").removeClass("past").addClass("future");
    }
    else if (now == 10){
        $("input:eq(1)").removeClass("past").addClass("present");
        $("input:gt(1)").removeClass("past").addClass("future");
    }
    else if (now == 11){
        $("input:eq(2)").removeClass("past").addClass("present");
        $("input:gt(2)").removeClass("past").addClass("future");
    }
    else if (now == 12){
        $("input:eq(3)").removeClass("past").addClass("present");
        $("input:gt(3)").removeClass("past").addClass("future");
    }
    else if (now == 13){
        $("input:eq(4)").removeClass("past").addClass("present");
        $("input:gt(4)").removeClass("past").addClass("future");
    }
    else if (now == 14){
        $("input:eq(5)").removeClass("past").addClass("present");
        $("input:gt(5)").removeClass("past").addClass("future");
    }
    else if (now == 15){
        $("input:eq(6)").removeClass("past").addClass("present");
        $("input:gt(6)").removeClass("past").addClass("future");
    }
    else if (now == 16){
        $("input:eq(7)").removeClass("past").addClass("present");
        $("input:gt(7)").removeClass("past").addClass("future");
    }
    else if (now == 17){
        $("input:eq(8)").removeClass("past").addClass("present");
    }
});

$(".saveBtn").on("click", function(){
    mySchedule[0] = $("input:eq(0)").val().trim();
    mySchedule[1] = $("input:eq(1)").val().trim();
    mySchedule[2] = $("input:eq(2)").val().trim();
    mySchedule[3] = $("input:eq(3)").val().trim();
    mySchedule[4] = $("input:eq(4)").val().trim();
    mySchedule[5] = $("input:eq(5)").val().trim();
    mySchedule[6] = $("input:eq(6)").val().trim();
    mySchedule[7] = $("input:eq(7)").val().trim();
    mySchedule[8] = $("input:eq(8)").val().trim();
    localStorage.setItem("saveMySchedule", JSON.stringify(mySchedule));
});