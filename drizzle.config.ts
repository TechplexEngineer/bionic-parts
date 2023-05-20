import type { Config } from "drizzle-kit";

export default {
  schema: "./src/lib/schemas/index.ts",
  out: "./src/lib/migrations",
  // Whether to execute each statement in the migrations individually.
  // Set to true if you are using SQLite or MySQL (as they don't support multiple DDL statements in a transaction).
  "breakpoints": true
} satisfies Config;