function telephoneCheck(str) {
    const regex = /^([+]?1[\s]?)?((?:[(](?:[2-9]{3})[)][\s]?)|(?:(?:[2-9]{3})[\s.-]?)){1}([2-9]{3}[\s.-]?){1}([0-9]{4}){1}$/
    return regex.test(str);
  }
  
  telephoneCheck("555-555-5555");