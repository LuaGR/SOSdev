import type { Item } from '@/types/item'
import Resource from '@/components/items/resources'

export default function Items({ items }: { items: Item[] }) {
  return (
    <div className='gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
      {items.map((item) => (
        <Resource
          item={item}
          key={item.id}
        />
      ))}
    </div>
  )
}
