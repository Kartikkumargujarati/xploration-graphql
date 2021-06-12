import { RocketDto } from './dto';

export function getRocket(rocketDto: RocketDto) {
    return {
        id: rocketDto.id,
        description: rocketDto.description,
        company: rocketDto.company,
        country: rocketDto.country,
        name: rocketDto.name,
        images: rocketDto.flickr_images
    };
}
