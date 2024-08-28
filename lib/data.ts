import { sql } from '@vercel/postgres'

export async function fetchResources() {
  try {
    const data = await sql`SELECT * FROM Resources`
    return data.rows
  } catch (error) {
    console.error('Database Error: ', error)
  }
}
