import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'
import type { Item } from '@/types/item'

export async function GET() {
  try {
    // Crear la tabla con la estructura adecuada si no existe
    await sql`
      CREATE TABLE IF NOT EXISTS Resources (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        description TEXT,
        image TEXT,
        category VARCHAR(255)
      );
    `

    // Insertar los datos del JSON en la tabla
    await sql`
      INSERT INTO Resources (title, description, image, category)
      VALUES 
      ('NextUI', 'Offering a beautiful and adaptable system design.', 'https://nextui.org/_next/image?url=https%3A%2F%2Fnextui.org%2Fnextui-banner.png&w=750&q=100', 'System Design'),
      ('FakeStoreAPI', 'Rest API for your e-commerce or shopping website prototype', 'https://d4.alternativeto.net/2D8BJwydkMONJVaz_PkLJK9v43M9eiyjzTYOwULBZ6M/rs:fit:2400:2400:0/g:ce:0:0/YWJzOi8vZGlzdC9zL2Zha2Utc3RvcmUtYXBpXzQwODY3MF9mdWxsLnBuZw.jpg', 'API'),
      ('HeroIcons', 'Offering a beautiful and adaptable system design.', 'https://nextui.org/_next/image?url=https%3A%2F%2Fnextui.org%2Fnextui-banner.png&w=750&q=100', 'SVG'),
      ('Shadcnui', 'Offering a beautiful and adaptable system design.', 'https://nextui.org/_next/image?url=https%3A%2F%2Fnextui.org%2Fnextui-banner.png&w=750&q=100', 'System Design'),
      ('Prisma', 'Offering a beautiful and adaptable system design.', 'https://nextui.org/_next/image?url=https%3A%2F%2Fnextui.org%2Fnextui-banner.png&w=750&q=100', 'Database'),
      ('ThreeJS', 'Offering a beautiful and adaptable system design.', 'https://nextui.org/_next/image?url=https%3A%2F%2Fnextui.org%2Fnextui-banner.png&w=750&q=100', 'Animation'),
      ('ThreeJS', 'Offering a beautiful and adaptable system design.', 'https://nextui.org/_next/image?url=https%3A%2F%2Fnextui.org%2Fnextui-banner.png&w=750&q=100', 'Animation'),
      ('ThreeJS', 'Offering a beautiful and adaptable system design.', 'https://nextui.org/_next/image?url=https%3A%2F%2Fnextui.org%2Fnextui-banner.png&w=750&q=100', 'Animation'),
      ('ThreeJS', 'Offering a beautiful and adaptable system design.', 'https://nextui.org/_next/image?url=https%3A%2F%2Fnextui.org%2Fnextui-banner.png&w=750&q=100', 'Animation'),
      ('ThreeJS', 'Offering a beautiful and adaptable system design.', 'https://nextui.org/_next/image?url=https%3A%2F%2Fnextui.org%2Fnextui-banner.png&w=750&q=100', 'Animation'),
      ('ThreeJS', 'Offering a beautiful and adaptable system design.', 'https://nextui.org/_next/image?url=https%3A%2F%2Fnextui.org%2Fnextui-banner.png&w=750&q=100', 'Animation'),
      ('ThreeJS', 'Offering a beautiful and adaptable system design.', 'https://nextui.org/_next/image?url=https%3A%2F%2Fnextui.org%2Fnextui-banner.png&w=750&q=100', 'Animation'),
      ('ThreeJS', 'Offering a beautiful and adaptable system design.', 'https://nextui.org/_next/image?url=https%3A%2F%2Fnextui.org%2Fnextui-banner.png&w=750&q=100', 'Animation')
    `

    // Obtener los datos y asegurarse de que `rows` esté tipado como `Item[]`
    const { rows } = await sql<Item[]>`SELECT * FROM Resources;`

    // Retornar los datos en formato JSON
    return NextResponse.json({ items: rows }, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 })
  }
}
