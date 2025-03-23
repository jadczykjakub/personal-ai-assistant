import dotenv from "dotenv";

dotenv.config(); 

interface Config {
  telegram: {
    token: string;
  };
}

const config: Config = {
  telegram: {
    token: process.env.TELEGRAM_BOT_TOKEN || "",
  },
};

export default config;