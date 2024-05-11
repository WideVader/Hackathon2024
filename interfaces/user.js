class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.longitude = userData.longitude;
    this.latitude = userData.latitude;
    this.gender = userData.gender;
    this.age = userData.age;
    this.hobbies = userData.hobbies;
    this.currency = userData.currency;
    this.segment = userData.segment;
  }
}

export { User };
