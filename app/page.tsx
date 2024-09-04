import Header from '@/components/header'
import Filters from '../components/filters'
import Items from './items/items'
import { Suspense } from 'react'
import SkeletonItems from '@/components/items/skeleton-items'

export default async function Home({
  searchParams
}: {
  searchParams?: {
    query?: string
    page?: string
    category?: string
  }
}) {
  const query = searchParams?.query || ''
  const page = Number(searchParams?.page || '1')
  const category = searchParams?.category || 'all'

  return (
    <div className='flex flex-col gap-12 items-center'>
      <Header />
      <Filters />
      <Suspense
        key={query + page + category}
        fallback={<SkeletonItems />}>
        <Items searchParams={searchParams} />
      </Suspense>
    </div>
  )
}
