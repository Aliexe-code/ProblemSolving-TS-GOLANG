export function findEvenIndex(arr: number[]): number {
    const totalSum = arr.reduce((pre, cur) => pre + cur, 0);
  
    let leftSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      const rightSum = totalSum - leftSum - arr[i];
      console.log(`Index: ${i}, LeftSum: ${leftSum}, RightSum: ${rightSum}`);
  
      if (leftSum === rightSum) return i;
  
      leftSum += arr[i];
    }
  
    return -1;
  }