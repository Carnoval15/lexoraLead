import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { DATABASE_URL } from '$env/static/private';

const pool = mysql.createPool({
  uri: DATABASE_URL,
  connectTimeout: 30000,     // 30 seconds (needed for Layerbase free tier)
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
  enableKeepAlive: true
});

export const db = drizzle(pool);