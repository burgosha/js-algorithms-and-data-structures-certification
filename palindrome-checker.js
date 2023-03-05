function palindrome(str) {
    //Devuelve el string original sin carácteres alfanuméricos y en minúsculas
    const originalCleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    //Invierte el string anterior
    const reverseCleanStr = originalCleanStr.split("").reverse().join("");
    //Compara ambos strings
    if(originalCleanStr === reverseCleanStr) {
      return true;
    }   return false;
  }
  
  palindrome("eye");
  console.log(palindrome("_eye"))
  console.log(palindrome("0_0 (: /-\ :) 0-0"))
  console.log(palindrome("A man, a plan, a canal. Panama"))
  console.log(palindrome("nope"))