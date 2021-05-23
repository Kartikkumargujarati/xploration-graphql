export function getLaunch(launch: any) {
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
