import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'
import type { Item } from '@/types/item'

export async function GET() {
  try {
    // Obtener los datos y asegurarse de que `rows` esté tipado como `Item[]`
    const { rows } = await sql<Item[]>`SELECT * FROM resources;`

    // Retornar los datos en formato JSON
    return NextResponse.json({ items: rows }, { status: 200 })
  } catch (error) {
    console.error('Error fetching resources:', error)
    return NextResponse.json(
      { error: 'Failed to fetch resources' },
      { status: 500 }
    )
  }
}
