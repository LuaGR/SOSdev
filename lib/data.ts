import { sql } from '@vercel/postgres'

export const revalidate = 0
export async function fetchResources() {
  try {
    const data = await sql`SELECT * FROM resources`
    return data.rows
  } catch (error) {
    console.error('Database Error: ', error)
  }
}
