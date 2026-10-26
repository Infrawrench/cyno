import { config } from "dotenv";
import { join } from "path";
config({ path: join(__dirname, "..", ".env"), quiet: true });

import { defineConfig } from "drizzle-kit";

const url = process.env.DATABASE_URL;
if (!url) throw new Error("DATABASE_URL is not defined.");

export default defineConfig({
    schema: "./schema.ts",
    out: "./drizzle",
    dialect: "turso",
    dbCredentials: {
        url,
        authToken: process.env.DATABASE_AUTH_TOKEN,
    },
});
