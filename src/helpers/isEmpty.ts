/**
 * This function is here for the sole
 * purpose of checking if strings are
 * empty or not. If they are, return true,
 * otherwise, return false.
 */
export default (s: String) => ["", " ", undefined, null].some(v => v === s);
