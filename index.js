function isPalindrome(word) {
  let letters = word.split("")
  while (letters.length > 1) {
    if (letters.shift() === letters.pop()) {
  } else {
    return false
  }
}
  if (letters.length === 1 || letters.length === 0) {
    return true
  }
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: racecar = true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: robot = false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
