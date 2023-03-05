function rot13(str) {
    let localArr = str.split("").map(item => item.charCodeAt());
    const finalArr = [];
    
    for(let i = 0; i < localArr.length; i++) {
  
      if(localArr[i]>= 65 && localArr[i] <= 77) {
        finalArr.push(localArr[i] + 13);
      } else if(77 < localArr[i] && localArr[i] <= 90) {
        finalArr.push(localArr[i] + 12 - 90 + 65);
      } else {
        finalArr.push(localArr[i]);
      }
    }
    return finalArr.map(item => String.fromCharCode(item)).join("");
  }
  
  rot13("SERR PBQR PNZC");
  console.log(rot13("SERR PBQR PNZC"))