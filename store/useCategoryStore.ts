import { create } from 'zustand'
import resources from '@/resources.json'
import { Item } from '@/types/item'

type CategoryStore = {
  category: string
  setCategory: (category: string) => void
  filteredResources: () => Item[]
}

const useCategoryStore = create<CategoryStore>((set, get) => ({
  category: 'all',

  setCategory: (category) => set({ category }),

  filteredResources: () => {
    const { category } = get()
    return resources?.filter((item) => {
      return category === 'all' || category === item.category
    })
  }
}))

export { useCategoryStore }
