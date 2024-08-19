'use client'

import Header from '@/components/header'
import Filters from './ui/Filters'
import Items from './items/page'
import { Pagination } from '@nextui-org/pagination'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Suspense } from 'react'
import SkeletonItems from './loading'

export default function Home({
  searchParams
}: {
  searchParams?: {
    query?: string
    page?: string
  }
}) {
  const { replace } = useRouter()
  const [totalItems, setTotalItems] = useState(0) // Estado para almacenar el total de ítems
  const currentPage = Number(searchParams?.page || '1')
  const itemsPerPage = 12
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', page.toString())
    replace(`?${params.toString()}`)
  }

  return (
    <div className='flex flex-col gap-12 items-center'>
      <Header />
      <Filters />
      <Suspense fallback={<div>loading...</div>}>
        <Items
          searchParams={searchParams}
          setTotalItems={setTotalItems} // Pasar la función para actualizar totalItems
        />
      </Suspense>
      {totalPages > 1 && (
        <Pagination
          showControls
          color='success'
          total={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      )}
    </div>
  )
}
