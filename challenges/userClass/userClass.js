class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }
  
  incProgress(a){
    if (this.rank === a) this.progress += 3;
    else if (this.rank === (a + 1)) this.progress += 1;
    else if (this.rank < a && a !=1) this.progress += ((this.rank - a) * (this.rank - a) * 10);
    else if (this.rank === -1 && a === 1) {
      this.rank = 1
      this.progress += 10;
    };
    
    if (this.progress >= 100) {
      this.rank + 1 != 0 ? this.rank += this.progress % 10 + 1 : this.rank = 1;
      this.progress = this.progress %= 100;
    }
  }
}

module.exports = User; //?