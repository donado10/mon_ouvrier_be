import express from "express";

import authentication from "./authentication.ts";
import users from "./users.ts";
import workers from "./workers.ts";

//A router in Express is a middleware that allows you to group related
//routes together and manage their behavior separately from the main application.
const router = express.Router();

export default (): express.Router => {
	authentication(router);
	users(router);
	workers(router);
	return router;
};
