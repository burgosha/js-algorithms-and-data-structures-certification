function convertToRoman(num) {
    //Objeto con los números romanos
      const romans = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
      }
    
    //Variable string resultado
      let result = "";
    
    //Iteración de los elementos del objeto
      for(let r in romans) {
        let q = Math.floor(num / romans[r]);
        num -= q * romans[r];
        result += r.repeat(q);
      }
    
    //Devuelve el resultado
     return result;
    }
    
    convertToRoman(36);
    console.log(convertToRoman(3994))