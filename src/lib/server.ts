import express, { Express } from "express";

export const createServer = () => {
	const app = express();
	return app;
};

export const runServerOnPort = (app: Express, port: number) => {
	app.listen(port, () => {
		console.log("Server running on port " + port);
	});
};
