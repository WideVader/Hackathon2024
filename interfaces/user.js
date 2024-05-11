class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.location = userData.location;
    this.gender = userData.gender;
    this.age = userData.age;
    this.hobbies = userData.hobbies;
    this.currency = userData.currency;
    this.segment = userData.segment;
  }
}

export { User };
