/** 
 * A module for calculator functions  
 * Use VS Code Extension: "Add jsdoc comments"   
 * https://jsdoc.app/  
 * For easier use, add a keybinding by selecting the gear icon for "Add Doc Comments" in the command palette.
 * @module ./calculator 
 */
module.exports = {
    /** 
     * Returns the sum of a and b
     * @param {number} a
     * @param {number} b
     * @returns {number} Sum of a and b
     */
    add: function (a, b) {
        return a + b;
    },

    /**
     * Returns the difference of a and b
     * @param  {} a
     * @param  {} b
     * @returns {number} difference of a and b
     */
    subtract: function (a, b) {
        return a - b;
    },

    /**
     * Returns product of two numbers
     * @param  {} a
     * @param  {} b
     * @returns {number} product of a and b
     */
    multiply: function (a, b) {
        return a * b;
    },
    /**
     * Returns quotient of two numbers
     * @param  {} dividend
     * @param  {} divisor
     * @returns {number} quotient of dividend and divisor
     * @throws {DivideByZero} Argument divisor must be non-zero
     */
    divide: function (dividend, divisor) {
        return dividend / divisor;
    }
}
