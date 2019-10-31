import "reflect-metadata";
import { Constants } from "./lib/constants";
import { runServerOnPort } from "./lib/server";

runServerOnPort(Constants.config.PORT);
