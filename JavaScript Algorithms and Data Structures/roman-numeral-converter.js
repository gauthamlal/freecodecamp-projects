function convertToRoman(num) {
//  return num;
 let returnRoman = (numToConvert, decimalPlace) => {
     let romanToReturn = '';
     let arrFor1 = ['I', 'X', 'C', 'M'];
     let arrFor5 = ['V', 'L', 'D'];

     if (decimalPlace <= 3) {
         if (numToConvert <=3) {
             for (let i = 1; i <= numToConvert; i++) {
                 romanToReturn += arrFor1[decimalPlace-1];
             }
         } else if (numToConvert === 4) {
             romanToReturn = arrFor1[decimalPlace - 1] + arrFor5[decimalPlace - 1];
         } else if (numToConvert === 5) {
             romanToReturn = arrFor5[decimalPlace - 1];
         } else if (numToConvert <= 8) {
             romanToReturn = arrFor5[decimalPlace - 1];
             for (let i = 6; i <= numToConvert; i++) {
                 romanToReturn += arrFor1[decimalPlace-1];
             }
         } else if (numToConvert === 9){
             romanToReturn = arrFor1[decimalPlace - 1] + arrFor1[decimalPlace];
         } else {
             romanToReturn = '';
         }
     } else if (decimalPlace >= 4) {
         for (let i = 1; i <= numToConvert; i++) {
             romanToReturn += arrFor1[3];
         }
     }
     return romanToReturn;
 }

 let romanArr = [];
 let numString = (num.toString());

 console.log('length ', numString.length);
 let numToManipulate = num;
 for (let i = 1; i <= numString.length; i++) {
     let r = numToManipulate % 10;
     numToManipulate = Math.floor(numToManipulate/10);
     console.log(`At ${i}`, r);
     if (r > 0) {
         romanArr.unshift(returnRoman(r, i));
     }
 }
 return romanArr.join('');
}

console.log(convertToRoman(999));
