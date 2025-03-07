import { measureTime } from "./计算函数运行时间.js"

/*
输入一个整型数组，数组里有正数也有负数，数组连续的一个或多个整数组成一个子数组，每一个数组都有一个和，求数组中连续子数组最大和
*/

// 暴力枚举法
function maxSubArraySum1(nums) {
  console.log("暴力枚举法");
  
  const len = nums.length
  let maxSum = -Infinity
  for (let i = 0; i < len; i++) {
    let currentSum = 0
    for (let j = i; j < len; j++) {
      currentSum += nums[j]
      if (currentSum > maxSum) {
        maxSum = currentSum
      }
    }
  }
  return maxSum
}

// 动态规划
function maxSubArraySum2(nums) {
  console.log("动态规划");
  
  const len = nums.length
  if (len === 0) return 0
  const dp = new Array(len).fill(0)
  dp[0] = nums[0]
  let maxSum = dp[0]
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    if (dp[i] > maxSum) {
      maxSum = dp[i]
    }
  }
  return maxSum
}

// 优化的动态规划法（贪心算法）
function maxSubArraySum3(nums) {
  console.log("优化的动态规划（贪心算法）");
  
  const len = nums.length
  if (len === 0) return 0
  let currentSum = nums[0]
  let maxSum = nums[0]
  for (let i = 1; i < len; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i])
    if (currentSum > maxSum) {
      maxSum = currentSum
    }
  }
  return maxSum
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4, 1, 8, -1, 2]
measureTime(maxSubArraySum1, arr)
measureTime(maxSubArraySum2, arr)
measureTime(maxSubArraySum3, arr)
