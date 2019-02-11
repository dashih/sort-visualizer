// Returns a promise that resolves after X ms. This can be await'd to
// freeze a function and allow the thread to do other things (like repaint).
function asyncSleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//
// Status reporting operations
//
function startOperation(descr) {
    $(":button").prop("disabled", true);
    $("#description").html(descr);
    initArray();
    $("hr.arrayElement").css("border-color", "#F00000");
}

function endOperation() {
    $("hr.arrayElement").css("border-color", "black");
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
        let tmp = $("<hr class='arrayElement' style='margin: 0.5 0; padding: 0;'>");
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
