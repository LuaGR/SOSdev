import type { Item } from '@/types/item'
import Resource from '@/components/items/resources'

export default function Items({ items }: { items: Item[] }) {
  return (
    <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
      {items.map((item) => (
        <Resource
          item={item}
          key={item.id}
        />
      ))}
    </div>
  )
}
