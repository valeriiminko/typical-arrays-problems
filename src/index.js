
exports.min = function min (array) {
    return (array && array.length > 0) ? array.reduce((prev, curr) => prev = prev > curr ? curr: prev, Infinity): 0;
}

exports.max = function max (array) {
    return (array && array.length > 0) ? array.reduce((prev, curr) => prev = prev < curr ? curr: prev, -Infinity): 0;
}

exports.avg = function avg (array) {
    return (array && array.length > 0) ? array.reduce((prev, curr) => prev + curr, 0) / array.length: 0;
}
