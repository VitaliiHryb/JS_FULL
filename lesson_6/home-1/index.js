function createEmptyArray(len) {
    var arr = new Array(len);
    return arr;
}

/* second solution */
/*function createEmptyArray(len) {
    return [...Array(len)];
}*/
/* --------------- */

function createEmptyArray(len) {
    var arr = new Array(len);
    return arr;
}

/* NOT WORKS
function createEmptyArray(len) {
    let arr = [];
    while (arr.length < len) {
        arr.push('');
    }
    let a = arr.length;
    console.log(a);
}
*/