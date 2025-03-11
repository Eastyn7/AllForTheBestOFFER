import { measureTime } from "./计算函数运行时间.js";

/**
 * 题目描述
 * 给定一个整数数组 Array，请计算该数组每个指定区间内元素的总和。
 * 输入描述
 * 第一行输入为整数数组 Array 的长度 n，接下来 n 行，每行一个整数，表示数组的元素。随后的输入为需要计算总和的区间，直至文件结束。
 * 输出描述
 * 输出每个指定区间内元素的总和。
 */

async function prefixSum() {
  // const readline = require('readline')
  const { createInterface } = await import('node:readline');

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  })

  let inputLines = []
  rl.on('line', (line) => {
    inputLines.push(line.trim())
  })

  rl.on('close', () => {
    const n = parseInt(inputLines[0])

    let sum = new Array(n)
    sum[0] = parseInt(inputLines[1])

    for (let i = 1; i < n; i++) {
      sum[i] = sum[i - 1] + parseInt(inputLines[i + 1])
    }

    for (let i = n + 1; i < inputLines.length; i++) {
      let [left, right] = inputLines[i].split(' ').map(Number)
      if (left === 0) {
        console.log(sum[right]);
      } else {
        console.log(sum[right] - sum[left - 1]);
      }
    }
  })
}

prefixSum()