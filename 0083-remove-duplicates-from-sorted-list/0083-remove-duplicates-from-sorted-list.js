/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let re=head;
    while(re && re.next){
        if(re.val===re.next.val){
            re.next=re.next.next;
        }else{
            re=re.next;
        }
    }
    return head;
};