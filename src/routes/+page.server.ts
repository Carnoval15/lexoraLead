import { db } from '$lib/server/db';
import { sql } from 'drizzle-orm';

export async function load() {
  const result = await db.execute(sql`SELECT * FROM players ORDER BY score DESC LIMIT 10`);

  return {
    players: result[0]
  };
}