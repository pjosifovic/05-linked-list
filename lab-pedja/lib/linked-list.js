'use strict';

class LinkedList {

  constructor(value){
    this.value = value;
    this.next = null;
  }

  // TODO adding append, find and remove methods
  append(node){
    if(!(node instanceof LinkedList))
      throw new TypeError('<node> should be an instance of LinkedList');
    if(!this.next)
      this.next = node;
    else
      this.next.append(node);

    return this;
  }

  find(node){
    if(node === this.value)
      return this;
    if(this.next === null)
      return null;
    else
      return this.next.find(node);
  }

  remove(node){
    if(!(node instanceof LinkedList))
      throw new TypeError('<node> should be instance of LinkedList');
    if(!this.next)
      return this;
    if(this.next === node)
      this.next = this.next.next;
    else
      this.next.remove(node);

    return this;
  }

}



module.exports = LinkedList;
