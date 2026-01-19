import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import router from "./router/index.ts";

//Initiate our app
//create an instance of the Express.js application
const app = express();

//Middleware
//Auth
/* app.use(
	cors({
		credentials: true, //indicates that the server can include credentials (e.g., cookies, HTTP authentication) in CORS requests.
	})
); */
app.use(compression()); //reduces the size of responses and improves the speed of transferring data over the network
app.use(cookieParser()); //parses cookies from incoming requests
app.use(bodyParser.json()); //used to parse incoming JSON payloads of HTTP POST requests. It extracts the JSON data from the request body and makes it accessible via req.body in your route handlers

//Create server & listener
const server = http.createServer(app);
server.listen(8080, () => {
	console.log("Server running on http://localhost:8080/");
});

//DB

app.use("/", router());
