import { measureTime } from "./计算函数运行时间.js";

/*
给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
*/

// 暴力排序 (先平方，再排序)
function sortedSquares1(nums) {
  const len = nums.length
  let result = new Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    result[i] = nums[i]**2
  }
  console.log("平方后的结果：" + result);
  // 采用基本循环
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]]
      }
    }
  }
  return result
}

// 巧解（利用map和sort）
function sortedSquares2(nums) {
  return nums.map(i => i * i).sort((a, b) => a - b)
}

// 双指针法
function  sortedSquares3(nums) {
  let len = nums.length
  let result = new Array(len).fill(0)
  let i = 0, j = len - 1, k = len - 1
  while (i <= j) {
    let left = nums[i] ** 2, right = nums[j] ** 2
    if (left < right) {
      result[k--] = right
      j--
    } else {
      result[k--] = left
      i++
    }
  }
  return result
}

const arr1 = [-7, -3, 2, 3, 11]
const arr2 = [-7, -3, 2, 3, 11]
const arr3 = [-7, -3, 2, 3, 11]
measureTime(sortedSquares1, arr1)
measureTime(sortedSquares2, arr2)
measureTime(sortedSquares3, arr3)