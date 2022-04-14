export {
    vigenereCipher
};

import {
    removeNonAlphas
} from './utility';

import {
    shiftAlphaCharacter
} from './caesar';


/*
 * Requires: keyword contains at least one alphabetical character.
 * Modifies: Nothing.
 * Effects:  If encrypt is true, returns original string encrypted with
 *           Vigenere cipher using keyword. If encrypt is false, returns
 *           original string decrypted with Vigenere cipher using keyword.
 */
function vigenereCipher(original: string, keyword: string, encrypt: string): string {
    // TODO: implement

    // returning a string to avoid compile error
    return "";
}