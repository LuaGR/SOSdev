import { useCategoryStore } from '@/store/useCategoryStore'
import { Key, useEffect } from 'react'
import { Item } from '@/types/item'
import Resource from '../ui/items/Resources'

export default function Items({
  searchParams,
  setTotalItems
}: {
  searchParams?: {
    query?: string
    page?: string
  }
  setTotalItems: (total: number) => void
}) {
  const filteredByCategory = useCategoryStore((state) =>
    state.filteredResources()
  )

  const query = searchParams?.query || ''
  const page = Number(searchParams?.page || '1')
  const itemsPerPage = 12
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  // Filtrar los ítems y calcular el total de ítems filtrados antes de la paginación
  const filteredResources = filteredByCategory.filter((item: Item) => {
    return (
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description?.toLowerCase().includes(query.toLowerCase())
    )
  })

  // Actualizar el total de ítems encontrados
  useEffect(() => {
    setTotalItems(filteredResources.length)
  }, [filteredResources.length, setTotalItems])

  // Aplicar la paginación
  const paginatedResources = filteredResources.slice(startIndex, endIndex)

  return (
    <div className='gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
      {paginatedResources.map((item: Item, index: Key) => (
        <Resource
          item={item}
          index={index}
          key={item.id}
        />
      ))}
    </div>
  )
}
