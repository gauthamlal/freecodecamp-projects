function palindrome(str) {
  // Good luck!
  let reg = /[a-z0-9]/i;
  let newArr = str.split('').filter(item => reg.test(item));
  return newArr.join('').toLowerCase() === newArr.reverse().join('').toLowerCase();
}

palindrome("A man, a plan, a canal. Panama");
