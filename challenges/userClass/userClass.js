class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }
  
  incProgress(a){
    if (this.rank - a === 0) this.progress += 3;
    else if (this.rank - a < 0) this.progress += ((this.rank - a) * -10);

    if (this.progress > 100) {
      this.rank += 1;
      this.progress = this.progress - 100;
    }
  }
}

module.exports = User; //?