import { RESTDataSource } from 'apollo-datasource-rest';

export class CompanyDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v4/';
  }

  public async getCompanyInfo() {
    return this.get(`/company`);
  }
}
