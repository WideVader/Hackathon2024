class Company {
  constructor(companyData) {
    this.id = companyData.id;
    this.name = companyData.name;
    this.location = companyData.location;
    this.currency = companyData.currency;
    this.category = companyData.category;
  }
}

export { Company };
