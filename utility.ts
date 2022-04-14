export {
    SIZE,
    ALNUM,

    removeNonAlphas,
    removeDuplicate,

    printGrid,
    getChoice
}

const SIZE = 6;
const ALNUM = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";


/*
 * Requires: Nothing.
 * Modifies: Nothing.
 * Effects:  Returns a copy of original string with all non-alphabetical
 *           characters (numbers, symbols, spaces, punctuation marks, etc.)
 *           removed.
 *
 *           Example: "EECS 183!" -> "EECS"
 */
function removeNonAlphas(original: string): string {
    // TODO: implement

    // returning a string to avoid compile error
    return "";
}


/*
 * Requires: original contains only uppercase alphabet and/or digits from 0 to 9.
 * Modifies: Nothing.
 * Effects:  Returns a copy of original string with duplicate characters except
 *           for the first occurence removed.
 *
 *           Example: "AABBCAB" -> "ABC"
 */
function removeDuplicate(original: string): string {
    // TODO: implement

    // returning a string to avoid compile error
    return "";
}


////////////////////////////////////////////////////////////////////////////////
// Do not touch code below. ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
 * Requires: Nothing.
 * Modifies: Nothing.
 * Effects:  Prints the grid.
 */
function printGrid(grid: Int8Array): void {
    for (let col = 0; col < SIZE; col++) {
        process.stdout.write(" ---");
    }
    process.stdout.write("\n");

    for (let row = 0; row < SIZE; row++) {
        process.stdout.write("| ");
        for (let col = 0; col < SIZE; col++) {
            process.stdout.write(
                String.fromCharCode(grid[row * SIZE + col])
                + " | "
                );
        }
        process.stdout.write("\n");
        for (let col = 0; col < SIZE; col++) {
            process.stdout.write(" ---");
        }
        process.stdout.write("\n");
    }
}


import PromptSync from 'prompt-sync';
const prompt = PromptSync({
    sigint: true
});

function getChoice(): number {
    const choiceInput = prompt('Choice --> ');
    return parseInt(choiceInput);
}