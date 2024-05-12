class Transaction {
  constructor(transactionData) {
    this.id = transactionData.id;
    this.t_latitude = transactionData.t_latitude;
    this.t_longitude = transactionData.t_longitude;
    this.user_agent = transactionData.user_agent;
    this.price = transactionData.price;
    this.t_currency = transactionData.t_currency;
    this.weather = transactionData.weather;
    this.category = transactionData.category;
    this.issuer = transactionData.issuer;
    this.product = transactionData.product;
    this.user_id = transactionData.user_id;
    this.time = transactionData.time;
    //bollean
    this.fraud = transactionData.fraud;
    //bollean
    this.analized = transactionData.analized;
    //identificator of a category of the merchent
    this.category = transactionData.category;
  }
}

export { Transaction };
