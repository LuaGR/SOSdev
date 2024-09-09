import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'
import type { Item } from '@/types/item'

export const dynamic = 'force-dynamic'

// GET: Obtener todos los registros de la tabla resources
export async function GET() {
  try {
    const { rows } = await sql<Item[]>`SELECT * FROM resources`
    return NextResponse.json({ items: rows }, { status: 200 })
  } catch (error) {
    console.error('Error fetching resources:', error)
    return NextResponse.json(
      { error: 'Failed to fetch resources' },
      { status: 500 }
    )
  }
}
