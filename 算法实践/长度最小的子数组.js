import { measureTime } from "./计算函数运行时间.js";

/**
 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
 */

// 暴力解法
function minSubArrayLen1(nums, target) {
  let result = Infinity
  let currentSum = 0
  let len = nums.length
  for (let i = 0; i < len; i++) {
    currentSum = 0
    for (let j = i; j < len; j++) {
      currentSum += nums[j]    
      if (currentSum >= target) {
        result = result < (j - i + 1) ? result : (j - i + 1)
        break
      }
    }
  }
  return result === Infinity ? 0 : result
}

// 滑动窗口
function minSubArrayLen2(nums, target) {
  let start = 0
  let end = 0
  let result = Infinity
  let sum = 0
  const len = nums.length
  while (end < len) {
    sum += nums[end]
    while (sum >= target) {
      result = Math.min(result, end - start + 1)
      sum -= nums[start]
      start++
    }
    end++
  }
  return result === Infinity ? 0 : result
}

const arr1 = [2, 3, 1, 2, 4, 3]
const arr2 = [2, 3, 1, 2, 4, 3]
const s = 7

measureTime(minSubArrayLen1, arr1, s)
measureTime(minSubArrayLen2, arr2, s)