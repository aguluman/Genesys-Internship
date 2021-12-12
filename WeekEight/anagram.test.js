const isAnagram = require('./anagram');

test ('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function');
});

test('"cinema" is an anagram os "iceman"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"Dormitory" is an anagram os "dirty room##"', () => {
    expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
    expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});
