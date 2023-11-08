//no1
function minimal(a, b) {
    if (a <= b) {
      return a;
    } else {
      return b;
    }
  }
  
  console.log(minimal(1, 4)); // Hasilnya: 1
  console.log(minimal(3, 2)); // Hasilnya: 2
  console.log(minimal(3, 3)); // Hasilnya: 3
  
  //no2
  function power(a, b) {
    return Math.pow(a, b);
  }
  
  console.log(power(7, 3));    // Hasilnya: 343
  console.log(power(3, 3));    // Hasilnya: 27
  console.log(power(4, 0.5));  // Hasilnya: 2
  