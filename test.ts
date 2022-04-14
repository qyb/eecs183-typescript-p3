import {
    mixKey,
    findInGrid,
    polybiusSquare
} from './polybius';

import {
    vigenereCipher
} from './vigenere';

import {
    shiftAlphaCharacter,
    caesarCipher
} from './caesar';

import {
    SIZE,
    ALNUM,
    removeDuplicate,
    removeNonAlphas,
    printGrid
} from './utility';

export {
    startTests
};

function startTests() {
    testPrintGrid();
}

function testPrintGrid() {
    let grid = new Int8Array(Buffer.from(ALNUM, 'ascii'));
    printGrid(grid);
}