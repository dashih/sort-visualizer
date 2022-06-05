'use strict';

function getArrayLength() {
    return chart.data.datasets[0].data.length;
}

function getArrayValue(idx) {
    return chart.data.datasets[0].data[idx];
}

function setArrayValue(idx, val) {
    chart.data.datasets[0].data[idx] = val;
    chart.data.datasets[0].backgroundColor[idx] = '#AAFF00';
}

async function update() {
    chart.update();
    await new Promise(r => setTimeout(r, 5));
    chart.data.datasets[0].backgroundColor.fill('#8B0000');
}
