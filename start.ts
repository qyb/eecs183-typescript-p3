import {
    startTests
} from './test';

import {
    ciphers
} from './ciphers';

import {
    getChoice
} from './utility';


(function() {
    console.log('-------------------------------');
    console.log('EECS 183 Project 2 Menu Options');
    console.log('-------------------------------');
    console.log('1) Execute testing functions in test.ts');
    console.log('2) Execute ciphers() function to use ciphers');

    const choice = getChoice();

    if (choice === 1) {
        startTests();
    } else if (choice === 2) {
        ciphers();
    }

    return 0;
})();