import express from "express";
import { findDocument, findWorkerByFilter } from "../helpers/appwrite.ts";
import { boundingBox } from "../helpers/utils.ts";

export const getWorkers = async (
	req: express.Request,
	res: express.Response
) => {
	try {
		const workersList = await findDocument();
		return res.json({ workers: workersList });
	} catch (error) {
		console.log(error);
		return res.json(400);
	}
};

export const getWorkersByCategoryRadius = async (
	req: express.Request,
	res: express.Response
) => {
	const { category, radius, sourceCoords } = req.body;

	const limits = boundingBox(
		{ longitude: sourceCoords[0], latitude: sourceCoords[1] },
		radius
	);

	const workersList = await findWorkerByFilter(
		category,
		limits.minLat,
		limits.maxLat,
		limits.minLon,
		limits.maxLon
	);

	try {
		return res.json({ workers: workersList });
	} catch (error) {
		console.log(error);
		return res.json({ message: 400 });
	}
};
