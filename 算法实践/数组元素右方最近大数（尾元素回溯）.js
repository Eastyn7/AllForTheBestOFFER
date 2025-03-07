import { measureTime } from "./计算函数运行时间.js"

/*
给定一个整数数组，要求找出数组中每个元素右侧第一个比它大的元素，如果不存在则用 -1 表示。对于数组中的最后一个元素，需要从数组的开头开始查找第一个比它大的元素。
*/

// 暴力解法
function findRightGreaterElement1(nums) {
  const len = nums.length
  const result = []
  for (let i = 0; i < len - 1; i++) {
    let found = false
    for (let j = i + 1; j < len; j++) {
      if (nums[j] > nums[i]) {
        result.push(nums[j])
        found = true
        break
      }
    }
    if (!found) {
      result.push(-1)
    }
  }

  let lastFound = false
  const lastElement = nums[len - 1]
  for (let k = 0; k < len - 1; k++){
    if (nums[k] > lastElement) {
      result.push(nums[k])
      lastFound = true
      break
    }
  }
  if (!lastFound) {
    result.push(-1)
  }

  return result
}

// 单调栈解法
function findRightGreaterElement2(nums) {
  const len = nums.length
  const result = new Array(len).fill(-1)
  const stack = []

  for (let i = 0; i < len - 1; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      result[stack.pop()] = nums[i]
    }
    stack.push(i)
  }

  const lastElement = nums[len - 1]
  for (let i = 0; i < len - 1; i++){
    if (nums[i] > lastElement) {
      result[len - 1] = nums[i]
      break
    }
  }
  
  return result
}

const arr = [1, 5, 3, 6, 4, 8, 9, 10, 2];
measureTime(findRightGreaterElement1, arr)
measureTime(findRightGreaterElement2, arr)