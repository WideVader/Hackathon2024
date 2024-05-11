class Transaction {
  constructor(transactionData) {
    this.id = transactionData.id;
    this.location = transactionData.location;
    this.user_agent = transactionData.user_agent;
    this.price = transactionData.price;
    this.currency = transactionData.currency;
    this.weather = transactionData.weather;
    this.category = transactionData.category;
    this.issuer = transactionData.issuer;
    this.product = transactionData.product;
    this.user_id = transactionData.user_id;
  }
}
