class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(l1: ListNode, l2: ListNode) -> ListNode:
      new_node = ListNode()
      
      if(l1 == None and l2 == None):
        return None
      if(l1 == None):
        new_node.val = l2.val
        new_node.next = mergeTwoLists(None, l2.next)
        return new_node
      if(l2 == None):
        new_node.val = l1.val
        new_node.next = mergeTwoLists(l1.next, None)
        return new_node
      if(l2.val <= l1.val):
        new_node.val = l2.val
        new_node.next = mergeTwoLists(l1, l2.next)
        return new_node
      else:
        # if(l1.val < l2.val)
        new_node.val = l1.val
        new_node.next = mergeTwoLists(l1.next, l2)
        return new_node

l1 = ListNode(1, ListNode(2, ListNode(4)))
l2 = ListNode(1, ListNode(3, ListNode(4)))

result = mergeTwoLists(l1, l2)

while(result):
  print(result.val, end='')
  result = result.next
print()
# expect 112344