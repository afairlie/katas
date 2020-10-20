# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def addTwoNumbers(l1: ListNode, l2: ListNode) -> ListNode:
    # create a new node
    new_node = ListNode()
    
    # add current node values
    sum = l1.val + l2.val
    decimal = 0
    
    if( sum > 9):
      sum = sum - 10
      decimal = 1
    
    new_node.val = sum
    
    if(l1.next == None and l2.next):
      new_l1 = ListNode()
      if(decimal):
        new_l1.val += decimal
      new_node.next = addTwoNumbers(new_l1, l2.next)
      return new_node
    
    if(l1.next and l2.next == None):
      new_l2 = ListNode()
      if(decimal):
        new_l2.val += decimal
      new_node.next = addTwoNumbers(l1.next, new_l2)
      return new_node
    
    if(l1.next == None and l2.next == None):
      if(decimal):
        last_node = ListNode(decimal)
        new_node.next = last_node
      return new_node
    
    l1.next.val += decimal
    new_node.next = addTwoNumbers(l1.next, l2.next)
    
    return new_node

l1 = ListNode(3, ListNode(4, ListNode(5)))
l2 = ListNode(4, ListNode(6, ListNode(2)))

result = addTwoNumbers(l1, l2)

while(result):
  print(result.val, end='')
  result = result.next
print()
# expect 708