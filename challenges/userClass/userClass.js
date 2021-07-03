class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }
  
  incProgress(a){
    return this.progress = 3;
  }
}

const NewUser = new User();//?

module.exports = User; //?