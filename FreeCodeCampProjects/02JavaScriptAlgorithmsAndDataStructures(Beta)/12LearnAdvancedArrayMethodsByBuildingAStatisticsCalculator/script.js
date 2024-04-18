const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
  const sorted = array.sort((a, b) => a - b);
  const median =
    array.length % 2 === 0
      ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
      : sorted[Math.floor(array.length / 2)];
  return median;
}

// Define una función con un parámetro array que se espera sea un array de números
const getMode = (array) => {
// Inicializa un objeto vacío para almacenar el recuento de cada elemento en el array
  const counts = {};
// Se utiliza el método .forEach() para iterar sobre cada elemento "el" del array.
// Dentro del bucle, se incrementa el recuento del elemento "el" en el objeto "counts".
// Si el elemento ya existe en "counts", se incrementa su recuento en 1; de lo contrario, se inciializa su recuento en 1.
  array.forEach((el) => {counts[el] = (counts[el] || 0) + 1;})

  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }
}


const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  
  const mean = getMean(numbers);
  const median = getMedian(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
}