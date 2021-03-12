module.exports = function reverse (n) {
    const string = String(Math.abs(n));
    const newString = string.split("").reverse().join("");
    return +newString
}
