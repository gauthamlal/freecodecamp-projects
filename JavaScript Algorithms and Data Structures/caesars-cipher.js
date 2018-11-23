function rot13(str) { // LBH QVQ VG!

  let decipher = (charToDecipher) => {
      let regex = /[A-Z]/;
      if(regex.test(charToDecipher)) {
          if (charToDecipher.charCodeAt(0) -13 < 65) {
              return String.fromCharCode(charToDecipher.charCodeAt(0) -13 + 26);
          } else {
              return String.fromCharCode(charToDecipher.charCodeAt(0) -13);
          }
      } else {
          return charToDecipher;
      }
  }

  let strArr = str.split('');
  let decipheredArr = [];

  for (let i = 0; i < strArr.length; i++) {
      decipheredArr.push(decipher(strArr[i]));
  }

  return decipheredArr.join('');
}

// Change the inputs below to test
console.log(rot13("SERR CVMMN!"));
