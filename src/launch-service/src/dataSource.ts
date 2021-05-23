import { RESTDataSource } from 'apollo-datasource-rest';

export class LaunchDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v4/';
  }

  public async getNextLaunch() {
    return this.get(`/launches/next`);
  }
}
