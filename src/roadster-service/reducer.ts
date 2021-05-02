export function getRoaster(roadsterInfo: any) {
  return {
    details: roadsterInfo.details,
    earthDistance: roadsterInfo.earth_distance_mi,
    launchDate: roadsterInfo.launch_date_utc,
    links: {
      images: roadsterInfo.flickr_images,
      wikipedia: roadsterInfo.wikipedia,
      youTube: roadsterInfo.video
    },
    marsDistance: roadsterInfo.mars_distance_mi,
    name: roadsterInfo.name,
    speed: roadsterInfo.speed_mph
  };
}
