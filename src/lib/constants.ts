import { config } from "dotenv";

config();

export const Constants = {
	config: {
		PORT: process.env.PORT || 4000
	}
};
