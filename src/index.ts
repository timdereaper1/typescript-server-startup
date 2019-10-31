import { Constants } from "./lib/constants";
import { createServer, runServerOnPort } from "./lib/server";

runServerOnPort(createServer(), Constants.config.PORT as number);
