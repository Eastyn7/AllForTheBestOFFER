import { measureTime } from './计算函数运行时间.js'

/*
有三种颜色的球，白色（0表示），红色（1表示），蓝色（2表示），
给出序列[2, 1, 0, 1, 2, 0, 0, 1, 2 , 0, 0, 1, 2, 2]
请按照白、红、蓝的顺序排序
*/

// 荷兰国旗问题
function sortColors(nums) {
  const len = nums.length
  let left = 0
  let right = len - 1
  let current = 0
  while (current <= right) {
    if (nums[current] === 0) {
      [nums[current], nums[left]] = [nums[left], nums[current]]
      left++
      current++
    } else if (nums[current] === 2) {
      [nums[current], nums[right]] = [nums[right], nums[current]]
      right--
    } else {
      current++
    }
  }
  return nums
}

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
const arr5 = [2, 1, 0, 1, 2, 0, 0, 1, 2, 0, 0, 1, 2, 2];
measureTime(sortColors, arr1)
measureTime(bubbleSort, arr2)
measureTime(selectionSort, arr3)
measureTime(insertionSort, arr4)
measureTime(quickSort, arr5)