var timeArray =["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];

var now = moment().format('H');
console.log(now);

$("#currentDay").text(moment().format('dddd, MMMM Do'));


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
        timeDiv.addClass("col-lg-1 col-sm-1 col-xs-1 hour");
        timeDiv.text(timeArray[i]);
        rowDiv.append(timeDiv);
        var noteDiv = $("<input>");
        noteDiv.addClass("col-lg-8 col-sm-8 col-xs-8 note past");
        rowDiv.append(noteDiv);
        var buttonDiv = $("<button>")
        buttonDiv.addClass("col-lg-1 col-sm-1 col-xs-1 saveBtn");
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
        console.log("save");
});