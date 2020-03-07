const chainMaker = {
  arrayChain: [],
  getLength() {
    return this.arrayChain.length;
  },
  addLink(value) {
    this.arrayChain.push((value === 'undefined') ? '( )' : `( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || this.getLength() <= position || parseInt(position) != position) {
      this.arrayChain = [];
      throw new Error();
    } else {
      this.arrayChain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.arrayChain.reverse();
    return this;
  },
  finishChain() {
    let result = this.arrayChain.join('~~');
    this.arrayChain = [];
    return result;
  }
};

module.exports = chainMaker;
