const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
  const sorted = array.sort((a, b) => a - b);

  const median = array.length % 2 === 0 ? 
    getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]]) :
    sorted[Math.floor(array.length / 2)];

  return median;
}


/* running tests
Your median variable should use a ternary operator to check if the array.length is even.
If array.length is even, pass an array with the two middle numbers from the sorted array to the getMean function. The first item in the array argument should be the value at index array.length / 2 from sorted and the second should use the value at the index array.length / 2 - 1 from sorted.
If the array.length is odd, your median variable should assign the middle number to the median variable. The middle number is the value of sorted at Math.floor(array.length / 2).
tests completed */

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  
  const mean = getMean(numbers);

  document.querySelector("#mean").textContent = mean;
}