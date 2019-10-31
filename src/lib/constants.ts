import { config } from "dotenv";

config();

export const Constants = {
	config: {
		PORT: Number(process.env.PORT).valueOf() || 4000
	}
};
