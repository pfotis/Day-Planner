var timeArray =["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];

$("#currentDay").text(moment().format('dddd, MMMM Do'));

// function create the row with all the elements
function rowFunction(timeEl){
    var rowDiv = $("<div>");
    rowDiv.addClass("row");
    $(".container").append(rowDiv);
    var emptyDiv = $("<div>");
    emptyDiv.addClass("col-lg-1 col-sm-1 col-xs-1");
    rowDiv.append(emptyDiv);
    var timeDiv = $("<div>");
    timeDiv.addClass("col-lg-1 col-sm-1 col-xs-1 hour");
    timeDiv.text(timeEl);
    rowDiv.append(timeDiv);
    var noteDiv = $("<div>");
    noteDiv.addClass("col-lg-8 col-sm-8 col-xs-8");
    rowDiv.append(noteDiv);
    var buttonDiv = $("<button>")
    buttonDiv.addClass("col-lg-1 col-sm-1 col-xs-1 saveBtn");
    rowDiv.append(buttonDiv);
}

for (var i=0; i<timeArray.length; i++ ){
    rowFunction(timeArray[i]);
}