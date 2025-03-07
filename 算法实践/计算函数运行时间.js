// 计算运行时间
export const measureTime = (func, input) => {
  const startTime = performance.now()
  const result = func([...input])
  const endTime = performance.now()
  const timeTaken = endTime - startTime
  console.log(`${func.name} 排序结果：`, result);
  console.log(`${func.name} 运行时间：${timeTaken} 毫秒`);
}