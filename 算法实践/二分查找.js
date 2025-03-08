import { measureTime } from './计算函数运行时间.js'

// 左闭右闭区间
function binarySearch1(nums, target) {
  let middle = 0
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    // middle = left + ((right - left) / 2)
    middle = left + ((right - left) >> 1)
    if (nums[middle] > target) {
      right = middle - 1
    } else if (nums[middle] < target) {
      left = middle + 1
    } else {
      return middle
    }
  }
  return -1
}

// 左闭右开区间
function binarySearch2(nums, target) {
  let middle = 0
  let left = 0
  let right = nums.length
  while (left < right) {
    // middle = left + ((right - left) / 2)
    middle = left + ((right - left) >> 1)
    if (nums[middle] > target) {
      right = middle
    } else if (nums[middle] < target) {
      left = middle + 1
    } else {
      return middle
    }
  }
  return -1
}

const arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
const arr2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
const x = 7
measureTime(binarySearch1, arr1, x)
measureTime(binarySearch2, arr2, x)