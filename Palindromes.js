function palindrome(str) {
  str = str.replace(/[^A-Za-z0-9]/g, '');
  str = str.toLowerCase();
  var palindromeStr = str;
  var myStringArray = str.split();
  var myPalindromeArray = palindromeStr.split('').reverse();
  palindromeStr = myPalindromeArray.join('');
  console.log("Compare 1: "+str);
  console.log("Compare 2: "+palindromeStr);
  if (palindromeStr === str)
    {
      return true;
    }
  else
    {
      return false;
    }
}

palindrome("");


