const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");
const inputNumberElement = document.getElementById("number");

convertButton.addEventListener("click", function() {
    const inputNumber = inputNumberElement.value;
    const number = parseInt(inputNumber, 10);

    if (inputNumber === "" || isNaN(number)) {
        output.textContent = "Please enter a valid number";
    } else if (number === -1) {
        output.textContent = "Please enter a number greater than or equal to 1";
    } else if (number >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
    } else {
        const romanNumeral = decimalToRoman(number);
        output.textContent = romanNumeral;
    }
});

function decimalToRoman(number) {
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let romanNumeral = '';
    for (let i = 0; i < romanNumerals.length; i++) {
        while (number >= romanNumerals[i].value) {
            romanNumeral += romanNumerals[i].numeral;
            number -= romanNumerals[i].value;
        }
    }
    return romanNumeral;
}
