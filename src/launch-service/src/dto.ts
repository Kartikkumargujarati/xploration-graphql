export interface LaunchDto {
    id: string;
    date_utc: string;
    name: string;
    flight_number: bigint;
    details: string;
    links: {
        flickr: {
            original: [string];
        };
        patch: {
            large: string;
        };
        reddit: {
            campaign: string;
        };
        wikipedia: string;
        webcast: string;
    };
}
