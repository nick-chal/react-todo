const purifyText = string => string.replace(/\s{2,}/g, ' ').trim();

const checkValidInput = string => [...string].some(el => el !== ' ');

export { purifyText };
export { checkValidInput };
