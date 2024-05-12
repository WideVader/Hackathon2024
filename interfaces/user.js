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
    /*
      array of object
      key is the user agent
      value is the number of transactions made with that user agent
    */
    this.user_agents = userData.user_agents;
    this.average_price = userData.average_price;
    //array of objects containng
    // issuer_id:{number_of_transactions: number} 
    this.categories = userData.categories;
    /*
      array of object
      key is the issuer name/id
      value is the number of transactions made on that issuer
    */
    this.payment_issuers = userData.payment_issuers
    /*
    amount of transactions in each time slot
    {
      1:0,(00:00-04:00)
      2:0,(04:00-08:00)
      3:0,(08:00-12:00)
      4:0,(12:00-16:00)
      5:0,(16:00-20:00)
      6:0(20:00-00:00)
    }
    */
    this.average_transaction_times = userData.average_transaction_times
  }
}

export { User };
