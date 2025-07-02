export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const head = new ListNode(0);
  let current = head;
  let carry = 0;
  while (l1 || l2 || carry) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;
    const sum = x + y + carry;
    carry = Math.floor(sum / 10);
    const digit = sum % 10;
    current.next = new ListNode(digit);
    current = current.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return head.next;
}
