import express from "express";

import {
	getWorkers,
	getWorkersByCategoryRadius,
} from "../controllers/workers.ts";

export default (router: express.Router) => {
	router.get("/workers", getWorkers);
	router.post("/workers/byFilter", getWorkersByCategoryRadius);
};
