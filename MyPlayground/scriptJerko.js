const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function generateRandomString(minLength, maxLength) {
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let randomString = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        randomString += alphabet[randomIndex];
    }
    return randomString;
}

let P = generateRandomString(1, 26);
let Q = generateRandomString(1, 26);

if (P.length !== Q.length) {
    const minLength = Math.min(P.length, Q.length);
    P = P.slice(0, minLength);
    Q = Q.slice(0, minLength);
}

console.log("Alphabet:", alphabet);
console.log("P:", P);
console.log("Q:", Q);