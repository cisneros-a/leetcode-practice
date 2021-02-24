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

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  let matching = true;
  let counter = 0;
  while (matching) {
    for (let i = 0; i < strs.length - 1; i++) {
      if (strs[i][counter] !== strs[i + 1][counter]) {
        matching = false;
      }
    }
    if (counter === strs[0].length) {
      return strs[0];
    }
    counter++;
  }

  return strs[0].slice(0, counter - 1);
};
