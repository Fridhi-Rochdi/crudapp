import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const DATABASE_URL = "postgresql://neondb_owner:npg_Lqs4XW6lnoxr@ep-jolly-pond-a11jsbng-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

const sql = neon(DATABASE_URL);

export const db = drizzle(sql, { schema });
