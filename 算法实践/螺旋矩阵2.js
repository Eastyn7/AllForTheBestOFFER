import { measureTime } from "./计算函数运行时间.js";

/**
 给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
 示例:
 输入: 3 
 输出: [ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ]
 */

function generateMatrix(n) {
  let startX = 0, startY = 0
  let loop = Math.floor(n / 2) // 旋转圈数
  let mid = Math.floor(n / 2) // 中间位置
  let offset = 1 // 控制每一层填充元素个数
  let count = 1 // 更新填充数字
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0))
  console.log(res);
  
  while (loop--) {
    let row = startX, col = startY
    for (; col < n - offset; col++) {
      res[row][col] = count++
    }
    for (; row < n - offset; row++) {
      res[row][col] = count++
    }
    for (; col > startY; col--) {
      res[row][col] = count++
    }
    for (; row > startX; row--) {
      res[row][col] = count++
    }

    startX++
    startY++
    offset++
  }
  if (n % 2 === 1) {
    res[mid][mid] = count
  }
  return res
  
}

const n = 5
measureTime(generateMatrix, n)