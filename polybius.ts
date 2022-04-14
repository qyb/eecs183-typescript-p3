export {
    mixKey,
    findInGrid,
    polybiusSquare
}

import {
    removeDuplicate
} from './utility';

/*
 * Requires: key does not contain duplicate characters and consists of only
 *           uppercase alphabet and/or digits from 0 to 9.
 * Modifies: Nothing.
 * Effects:  Returns a string with the key at the beginning and all the
 *           remaining characters from ALNUM following it.
 */
function mixKey(key: string): string {
    // TODO: implement

    // returning a string to avoid compile error
    return "";
}


/*
 * Requires: c is an uppercase alphanumeric character.
 * Modifies: Nothing.
 * Effects:  Returns a pair of coordinates in a string representation.
 *
 *           Example:
 *                      0   1   2   3   4   5
 *                      --- --- --- --- --- ---
 *                   0 | P | O | L | Y | B | I |
 *                      --- --- --- --- --- ---
 *                   1 | U | S | A | C | D | E |
 *                      --- --- --- --- --- ---
 *                   2 | F | G | H | J | K | M |
 *                      --- --- --- --- --- ---
 *                   3 | N | Q | R | T | V | W |
 *                      --- --- --- --- --- ---
 *                   4 | X | Z | 0 | 1 | 2 | 3 |
 *                      --- --- --- --- --- ---
 *                   5 | 4 | 5 | 6 | 7 | 8 | 9 |
 *                      --- --- --- --- --- ---
 *
 *                   Given the character 'G', this function should return "21",
 *                   since 2 is the row and 1 is the column that corresponds to
 *                   'G'.
 */
function findInGrid(c: number, grid: Int8Array): string {
    // TODO: implement

    // returning a string to avoid compile error
    return "";
}


/*
 * Requires: key consists of only uppercase alphanumeric characters, with no
 *           duplicate characters.
 *           original consist of only uppercase alphanumeric characters and spaces.
 *           A space is a valid character in original and must be represented as
 *           as a space in the ciphertext.
 * Modifies: Nothing.
 * Effects:  If encrypt is true, returns original string encrypted with
 *           the polybius square created using key. If encrypt is false, returns
 *           original string decrypted with polybius square created using key.
 */
function polybiusSquare(key: string, original: string, encrypt: boolean): string {
    // TODO: implement

    // returning a string to avoid compile error
    return "";
}