import { measureTime } from './计算函数运行时间.js'

// 经典排序——冒泡排序
function bubbleSort(nums) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }
  return nums
}

// 经典排序——选择排序
function selectionSort(nums) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex != i) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
    }
  }
  return nums
}

// 经典排序——插入排序
function insertionSort(nums) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    let current = nums[i]
    let j = i - 1
    while (j >= 0 && nums[j] > current) {
      nums[j + 1] = nums[j]
      j--
    }
    nums[j + 1] = current
  }
  return nums
}

// 经典排序——快速排序
function quickSort(nums) {
  const len = nums.length
  if (len <= 1) {
    return nums
  }
  const pivot = nums[Math.floor(len / 2)]
  const left = []
  const right = []
  const equal = []
  for (let i = 0; i < len; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i])
    } else if (nums[i] > pivot) {
      right.push(nums[i])
    } else {
      equal.push(nums[i])
    }
  }
  return [...quickSort(left), ...equal, ...quickSort(right)]
}

const arr1 = [2, 1, 0, 1, 2, 0, 0, 1, 2, 0, 0, 1, 2, 2];
const arr2 = [2, 1, 0, 1, 2, 0, 0, 1, 2, 0, 0, 1, 2, 2];
const arr3 = [2, 1, 0, 1, 2, 0, 0, 1, 2, 0, 0, 1, 2, 2];
const arr4 = [2, 1, 0, 1, 2, 0, 0, 1, 2, 0, 0, 1, 2, 2];

measureTime(bubbleSort, arr1)
measureTime(selectionSort, arr2)
measureTime(insertionSort, arr3)
measureTime(quickSort, arr4)