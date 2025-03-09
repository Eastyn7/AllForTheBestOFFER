import { measureTime } from "./计算函数运行时间.js";

// 暴力解法
function removeElement1(nums, val) {
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] === val) {
      for (let j = i + 1; j < len; j++) {
        nums[j - 1] = nums[j]
      }
      i--
      len--
    }
  }
  console.log("新数组大小：" + len);
  return nums.slice(0, len)
}

// 双指针法（快慢指针法）
function removeElement2(nums, val) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[j++] = nums[i]
    }
  }
  console.log("新数组大小："+ j);
  return nums.slice(0, j)
}

const arr1 = [0, 1, 2, 3, 3, 0, 4, 2]
const arr2 = [0, 1, 2, 3, 3, 0, 4, 2]
const val = 2
measureTime(removeElement1, arr1, val)
measureTime(removeElement2, arr2, val)