import Header from '@/components/header'
import Filters from '../components/filters'
import Items from './items/page'
import PaginationClient from '@/components/items/pagination-client'
import { Suspense } from 'react'
import resources from '@/resources.json'
import type { Item } from '@/types/item'

export default async function Home({
  searchParams
}: {
  searchParams?: {
    query?: string
    page?: string
    category?: string
  }
}) {
  const itemsPerPage = 12
  const query = searchParams?.query || ''
  const category = searchParams?.category || 'all'
  const page = Number(searchParams?.page || '1')

  const filteredResources = resources.filter((item: Item) => {
    const matchesCategory = category === 'all' || item.category === category
    const matchesQuery =
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description?.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  })

  const totalItems = filteredResources.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const paginatedResources = filteredResources.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  )

  return (
    <div className='flex flex-col gap-12 items-center'>
      <Header />
      <Filters />
      <Suspense fallback={<div>loading...</div>}>
        <Items items={paginatedResources} />
      </Suspense>
      <Suspense>
        <PaginationClient
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={page}
        />
      </Suspense>
    </div>
  )
}
