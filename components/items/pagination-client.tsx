// components/PaginationClient.tsx
'use client'

import { Pagination } from '@nextui-org/pagination'
import { useRouter } from 'next/navigation'

type PaginationClientProps = {
  totalItems: number
  itemsPerPage: number
  currentPage: number
}

export default function PaginationClient({
  totalItems,
  itemsPerPage,
  currentPage
}: PaginationClientProps) {
  const { replace } = useRouter()

  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(window.location.search)
    params.set('page', page.toString())
    replace(`?${params.toString()}`)
  }

  return (
    <>
      {totalPages > 1 && (
        <Pagination
          showControls
          color='success'
          total={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      )}
    </>
  )
}
