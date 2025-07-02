import { test, describe, expect } from 'bun:test';
import { ListNode, addTwoNumbers } from '../Problems/P024.addTwoNums.js';
function arrayToList(arr: number[]): ListNode | null {
  if (!arr.length) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}
function listToArray(list: ListNode | null): number[] {
  const result: number[] = [];
  let current = list;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}
describe('Add Two Numbers', () => {
  test('case 1: example 1', () => {
    const l1 = arrayToList([2, 4, 3]);
    const l2 = arrayToList([5, 6, 4]);
    const result = addTwoNumbers(l1, l2);
    expect(listToArray(result)).toEqual([7, 0, 8]);
  });

  test('case 2: example 2', () => {
    const l1 = arrayToList([0]);
    const l2 = arrayToList([0]);
    const result = addTwoNumbers(l1, l2);
    expect(listToArray(result)).toEqual([0]);
  });

  test('case 3: example 3 with carry', () => {
    const l1 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
    const l2 = arrayToList([9, 9, 9, 9]);
    const result = addTwoNumbers(l1, l2);
    expect(listToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });

  test('case 4: different lengths', () => {
    const l1 = arrayToList([1, 8]);
    const l2 = arrayToList([0]);
    const result = addTwoNumbers(l1, l2);
    expect(listToArray(result)).toEqual([1, 8]);
  });

  test('case 5: carry over multiple digits', () => {
    const l1 = arrayToList([9, 9]);
    const l2 = arrayToList([1]);
    const result = addTwoNumbers(l1, l2);
    expect(listToArray(result)).toEqual([0, 0, 1]);
  });
});
