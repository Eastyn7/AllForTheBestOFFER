// 计算运行时间
export const measureTime = (func, ...args) => {
  console.log("函数：" + func.name);
  console.log("参数：" + args);
  const startTime = performance.now();
  const result = func(...args);
  const endTime = performance.now();
  const timeTaken = endTime - startTime;
  console.log(`结果：`, result);
  console.log(`运行时间：${timeTaken} 毫秒`);
  console.log();
  return result;
};