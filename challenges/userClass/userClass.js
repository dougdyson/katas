class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }
  
  incProgress(a){
    if (this.rank - a === 0) {
      this.progress += 3;
    }
  }
}

module.exports = User; //?