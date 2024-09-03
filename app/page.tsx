import Header from '@/components/header'
import Filters from '../components/filters'
import Items from './items/items'
import { Suspense } from 'react'

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

  return (
    <div className='flex flex-col gap-12 items-center'>
      <Header />
      <Filters />
      <Suspense
        key={query + page}
        fallback={<div>loading...</div>}>
        <Items searchParams={searchParams} />
      </Suspense>
    </div>
  )
}
