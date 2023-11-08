//no1
function displayMessage() {
  console.log("Ini adalah pesan yang sudah ditentukan.");
}

displayMessage();

const inputNumber = 7; // Angka yang akan Anda bagi
const inputString = "Hello World"; // String yang akan Anda coba bagi

if (!isNaN(inputNumber) && !isNaN(inputString)) {
  const result = inputNumber / inputString; 
  console.log("Hasil perhitungan:", result);
} else {
  console.log("Salah satu atau kedua operand tidak valid.");
}

//no2
function findSquare(number) {
  return number * number;
}

console.log(findSquare(2));  // Hasilnya harus 4
console.log(findSquare(9));  // Hasilnya harus 81
console.log(findSquare(15)); // Hasilnya harus 225

//no3
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(0));  // Hasilnya harus 32
console.log(celsiusToFahrenheit(20)); // Hasilnya harus 68
console.log(celsiusToFahrenheit(40)); // Hasilnya harus 104

//no4
function rectangleArea(length, width) {
  const area = length * width;
  return `The area of the rectangle is ${area}`;
}

console.log(rectangleArea(10, 20)); // The area of the rectangle is 200
console.log(rectangleArea(30, 30)); // The area of the rectangle is 900

//no5
function reverseNum(number) {
  const reversedNumber = parseFloat(number.toString().split('').reverse().join(''));
  return reversedNumber;
}

console.log(reverseNum(123)); // Hasilnya: 321
console.log(reverseNum(5872)); // Hasilnya: 2785

//no6
function addNumber(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(addNumber(2, 4, 5)); // Hasilnya: 11
console.log(addNumber(10, 45, 34, 130)); // Hasilnya: 219

//no7
function letterCount(str, char) {
  const count = str.split(char).length - 1;
  return count;
}

console.log(letterCount("Connect", 'c')); // Hasilnya: 2
console.log(letterCount("first person", 's')); // Hasilnya: 2




