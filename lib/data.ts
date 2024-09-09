import { sql } from '@vercel/postgres'

export const dynamic = 'force-dynamic'
export async function fetchResources() {
  try {
    const data = await sql`SELECT * FROM resources`
    return data.rows
  } catch (error) {
    console.error('Database Error: ', error)
  }
}
