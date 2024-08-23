import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    // Crear la tabla con la estructura adecuada
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
      ('FakeStoreAPI', 'Offering a beautiful and adaptable system design.', 'https://nextui.org/_next/image?url=https%3A%2F%2Fnextui.org%2Fnextui-banner.png&w=750&q=100', 'API'),
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

    const result = await sql`SELECT * FROM Resources;`
    return NextResponse.json({ result }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
