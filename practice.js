var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      return [obj[nums[i]] - 1, i];
    }
    let diff = target - nums[i];
    obj[diff] = i + 1;
  }
  return "no";
};
