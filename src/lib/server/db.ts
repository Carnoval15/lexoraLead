import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { DATABASE_URL } from '$env/static/private';

const connection = await mysql.createConnection(DATABASE_URL);

export const db = drizzle(connection);