// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length == 0) {
        return [];
    }
    matrix.map((item, index) => (index % 2 ? item.reverse() : item));
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        arr = arr.concat(matrix[i]);
    }
    return arr;
};
