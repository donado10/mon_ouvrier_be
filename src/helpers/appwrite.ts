import { Databases, Query, Client } from "appwrite";

const client = new Client()
	.setEndpoint("http://srv-sage.dyndns.org:63080/v1") // Your Appwrite endpoint
	.setProject("695882ff002e267a7641");

const databases = new Databases(client);

export { databases };

export const findDocument = async () => {
	const response = await databases.listDocuments(
		"695883450027176caa64",
		"69588354003465a50606"
	);

	return response.documents;
};

export const findWorkerByFilter = async (
	type: string,
	minLat: number,
	maxLat: number,
	minLon: number,
	maxLon: number
) => {
	const response = await databases.listDocuments(
		"695883450027176caa64",
		"69588354003465a50606",
		[
			Query.equal("wo_Status", true),
			Query.equal("wo_Profile", [type]),
			Query.between("wo_Latitude", minLat, maxLat),
			Query.between("wo_Longitude", minLon, maxLon),
		]
	);

	return response.documents;
};
