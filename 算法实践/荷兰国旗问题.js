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

const arr1 = [2, 1, 0, 1, 2, 0, 0, 1, 2, 0, 0, 1, 2, 2];
measureTime(sortColors, arr1)