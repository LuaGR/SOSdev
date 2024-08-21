import { Key } from 'react'
import { Item } from '@/types/item'
import Resource from '../ui/items/Resources'

export function Items({ items }: { items: Item[] }) {
  return (
    <div className='gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
      {items.map((item: Item, index: Key) => (
        <Resource
          item={item}
          index={index}
          key={item.id}
        />
      ))}
    </div>
  )
}
