import { db } from '$lib/server/db';
import { sql } from 'drizzle-orm';

export async function load() {
  const playersResult = await db.execute(sql`SELECT * FROM players ORDER BY score DESC LIMIT 10`);
  const dateResult = await db.execute(sql`SELECT MAX(created_at) as last_update FROM players`);

  return {
    players: playersResult[0],
    last_update: dateResult[0][0]?.last_update ?? null
  };
}