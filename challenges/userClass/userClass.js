class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }
  
  incProgress(a){
    (a === this.rank) ? this.progress += 3 : 0
  }
}

const NewUser = new User();//?

module.exports = User; //?