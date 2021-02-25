// var twoSum = function (nums, target) {
//   let obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (obj[nums[i]]) {
//       return [obj[nums[i]] - 1, i];
//     }
//     let diff = target - nums[i];
//     obj[diff] = i + 1;
//   }
//   return "no";
// };

// var longestCommonPrefix = function (strs) {
//   if (strs.length === 0) {
//     return "";
//   }
//   let matching = true;
//   let counter = 0;
//   while (matching) {
//     for (let i = 0; i < strs.length - 1; i++) {
//       if (strs[i][counter] !== strs[i + 1][counter]) {
//         matching = false;
//       }
//     }
//     if (counter === strs[0].length) {
//       return strs[0];
//     }
//     counter++;
//   }

//   return strs[0].slice(0, counter - 1);
// };

// var isPalindrome = function (x) {
//   if (x < 0) {
//     return false;
//   }
//   let s = x.toString();
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     if (s[left] !== s[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// };

var romanToInt = function (s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (symbols[s[i]] < symbols[s[i + 1]]) {
      total -= symbols[s[i]];
    } else {
      total += symbols[s[i]];
    }
  }
  return total;
};
