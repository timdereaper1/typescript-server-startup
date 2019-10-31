import express, { Express } from "express";
import R from "ramda";

export const createServer = () => {
	const app = express();
	return app;
};

export const startServer = R.curry((app: Express, port: number) => {
	app.listen(port, () => {
		console.log("Server running on port " + port);
	});
});

export const runServerOnPort = startServer(createServer());
