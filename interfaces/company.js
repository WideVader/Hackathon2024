class Company {
  constructor(companyData) {
    this.id = companyData.id;
    this.name = companyData.name;
    this.c_latitude = companyData.c_latitude;
    this.c_longitude = companyData.c_longitude;
    this.c_currency = companyData.c_currency;
    this.category = companyData.category;
  }
}

export { Company };
