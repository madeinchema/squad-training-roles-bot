require('dotenv').config();

import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/ready";

const token = process.env.DISCORD_BOT_TOKEN;

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

ready(client);

client.login(token);