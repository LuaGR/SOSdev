import type { Item } from '@/types/item'
import Resource from '@/components/items/resources'
import PaginationClient from '@/components/items/pagination-client'

export const revalidate = 1

export default async function Items({
  searchParams
}: {
  searchParams?: {
    query?: string
    page?: string
    category?: string
  }
}) {
  // const rows = await fetchResources()
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/resources-db`,
    {
      cache: 'no-store' // Para asegurar que obtengas siempre datos actualizados
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch resources')
  }

  const data = await res.json()
  const resources: Item[] = data.items

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
