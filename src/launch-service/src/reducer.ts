import { LaunchDto } from './dto';

export function getLaunch(launch: LaunchDto) {
    return {
        id: launch.id,
        date: launch.date_utc,
        name: launch.name,
        flightNumber: launch.flight_number,
        details: launch.details,
        links: {
            images: launch.links.flickr.original,
            patch: launch.links.patch.large,
            reddit: launch.links.reddit.campaign,
            wikipedia: launch.links.wikipedia,
            youTube: launch.links.webcast
        }
    };
}

export function getPastLaunches(pastLaunches: LaunchDto[]) {
    // reverse to list to return a list with most recent launch first
    return pastLaunches.reverse().map((launch: any) => {
        return getLaunch(launch);
    });
}
