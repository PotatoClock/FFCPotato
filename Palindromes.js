function palindrome(str) {
  str = str.replace(/[^A-Za-z0-9]/g, '');
  str = str.toLowerCase();
  var palindromeStr = str;
  var myStringArray = str.split();
  var myPalindromeArray = palindromeStr.split('').reverse();
  palindromeStr = myPalindromeArray.join('');
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


