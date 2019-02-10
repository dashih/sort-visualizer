// Returns a promise that resolves after X ms. This can be await'd to
// freeze a function and allow the thread to do other things (like repaint).
function asyncSleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//
// Status reporting operations
//
function startOperation(op) {
    $(":button").prop("disabled", true);
    $("#statusText").text("Running " + op + "...");
    initArray();
}

function endOperation() {
    $("#statusText").text("Done.");
    $(":button").prop("disabled", false);
}

//
// Array operations.
//
function initArray() {
    let size = $("#sizeBox").val();
    let maxVal = $("#maxValBox").val();

    $("#array").empty();
    for (let i = 0; i < size; i++) {
        let tmp = $("<hr style='margin: 0 0 0 0; padding: 0 0 0 0;'>");
        tmp.width(Math.floor((Math.random() * maxVal)));
        $("#array").append(tmp);
    }
}

function getArrayLength() {
    return $($("#array").children()).length;
}

function getArrayElement(idx) {
    return $($("#array").children()[idx]);
}

function getArrayValue(idx) {
    return getArrayElement(idx).width();
}

function setArrayValue(idx, val) {
    getArrayElement(idx).width(val);
}
