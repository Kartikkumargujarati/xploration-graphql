import { RESTDataSource } from 'apollo-datasource-rest';
import { RocketDto } from './dto';

export class RocketDataSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.spacexdata.com/v4/';
    }

    public async getRocketById(id: string): Promise<RocketDto> {
        return this.get(`/rockets/${id}`);
    }
}
