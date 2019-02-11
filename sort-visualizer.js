function setDefaultParams() {
    let size = Math.floor($(window).height() / 5);
    $("#sizeBox").val(size);

    let maxVal = Math.floor($(window).width() * 0.75);
    $("#maxValBox").val(maxVal);
}

function startQuizMode() {
    
}

$(document).ready(setDefaultParams);
$(window).resize(setDefaultParams);

$("#bubblesortButton").click(bubblesort);
$("#insertionsortButton").click(insertionsort);
$("#mergesortButton").click(mergesort);
$("#heapsortButton").click(heapsort);
$("#quicksortButton").click(quicksort);
$("#radixsortLSDButton").click(radixsortLSD);

$("#quizModeButton").click(() => {
    quizMode = true;
    let r = Math.round(Math.random() * 10000);
    switch (r % 6) {
        case 0:
            bubblesort();
            break;
        case 1:
            insertionsort();
            break;
        case 2:
            mergesort();
            break;
        case 3:
            heapsort();
            break;
        case 4:
            quicksort();
            break;
        case 5:
            radixsortLSD();
            break;
        default:
            alert("oops");
    }
});
