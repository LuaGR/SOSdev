import type { Item } from '@/types/item'
import Resource from '@/components/items/resources'
import PaginationClient from '@/components/items/pagination-client'

export default async function Items({
  searchParams
}: {
  searchParams?: {
    query?: string
    page?: string
    category?: string
  }
}) {
  // Hacer una solicitud a la API para obtener los recursos
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/create-resources-table`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

  // Verificar si la respuesta fue exitosa
  if (!response.ok) {
    throw new Error('Failed to fetch resources')
  }

  // Parsear los datos de la API
  const { items: rows } = await response.json()

  // Map the rows to the Item type
  const resources: Item[] = (rows ?? []).map((row: Item) => ({
    id: row.id,
    title: row.title,
    description: row.description,
    image: row.image,
    category: row.category,
    url: row.url
  }))

  // Pagination
  const itemsPerPage = 8
  const query = searchParams?.query || ''
  const category = searchParams?.category || 'all'
  const page = Number(searchParams?.page || '1')

  // Filters
  const filteredResources = resources.filter((item: Item) => {
    const matchesCategory = category === 'all' || item.category === category
    const matchesQuery =
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description?.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  })

  const totalItems = filteredResources.length
  const paginatedResources = filteredResources.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  )

  return (
    <>
      <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
        {paginatedResources?.map((item) => (
          <Resource
            item={item}
            key={item.id}
          />
        ))}
      </div>

      <PaginationClient
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={page}
      />
    </>
  )
}
