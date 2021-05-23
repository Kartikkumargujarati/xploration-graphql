import { RESTDataSource } from 'apollo-datasource-rest';
import { LaunchDto } from './dto';

export class LaunchDataSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.spacexdata.com/v4/';
    }

    public async getNextLaunch(): Promise<LaunchDto> {
        return this.get(`/launches/next`);
    }

    public async getPastLaunches(): Promise<LaunchDto[]> {
        return this.get(`/launches/past`);
    }
}
