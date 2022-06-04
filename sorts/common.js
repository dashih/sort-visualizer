'use strict';

function getArrayLength() {
    return chart.data.datasets[0].data.length;
}

function getArrayValue(idx) {
    return chart.data.datasets[0].data[idx];
}

function setArrayValue(idx, val) {
    chart.data.datasets[0].data[idx] = val;
    chart.update();
}

async function update() {
    chart.update();
    await new Promise(r => setTimeout(r, 3));
}

function finish() {
    chart.data.datasets[0].backgroundColor = 'black';
    chart.update();
}
