import * as turf from "@turf/turf";

export const boundingBox = (
	coords: { longitude: number; latitude: number },
	radius: number
) => {
	// Center point
	const center = turf.point([coords.longitude, coords.latitude]); // IMPORTANT: [longitude, latitude]

	// Create a 10km radius circle
	const buffered = turf.buffer(center, radius, { units: "kilometers" });

	// Get bounding box [minLon, minLat, maxLon, maxLat]
	const bbox = turf.bbox(buffered);

	const [minLon, minLat, maxLon, maxLat] = bbox;

	return { minLat, maxLat, minLon, maxLon };
};
