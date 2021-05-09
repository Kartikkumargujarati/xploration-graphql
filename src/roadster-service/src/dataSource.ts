import { RESTDataSource } from 'apollo-datasource-rest';

export class RoadsterDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v4/';
  }

  public async getRoadsterInfo() {
    return this.get(`/roadster`);
  }
}
