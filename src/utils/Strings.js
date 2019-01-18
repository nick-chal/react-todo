/**
 * Remove any starting or trailing spaces and multiple spaces between words.
 *
 * @param {String} string
 */
const purifyText = string => string.replace(/\s{2,}/g, ' ').trim();

/**
 * Check if the string contains any othe character other than spaces.
 *
 * @param {String} string
 * @returns {Boolean}
 */
const checkValidInput = string => [...string].some(el => el !== ' ');

export { purifyText, checkValidInput };
