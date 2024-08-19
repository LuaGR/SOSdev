'use client'

import { Tab, Tabs } from '@nextui-org/tabs'
import { useCategoryStore } from '@/store/useCategoryStore'

export default function Filters() {
  const category = useCategoryStore((state) => state.category)
  const setCategory = useCategoryStore((state) => state.setCategory)

  const handleTabChange = (key) => {
    setCategory(key)
  }
  return (
    <div className='flex flex-wrap gap-4'>
      <Tabs
        variant='bordered'
        aria-label='Tabs variants'
        onSelectionChange={handleTabChange}
        selectedKey={category}>
        <Tab
          key='all'
          title='All'
        />
        <Tab
          key='AI'
          title='AI'
        />
        <Tab
          key='SVG'
          title='SVG'
        />
        <Tab
          key='Authentication'
          title='Authentication'
        />
        <Tab
          key='System Design'
          title='System Design'
        />
        <Tab
          key='API'
          title='API'
        />
        <Tab
          key='Database'
          title='Database'
        />
        <Tab
          key='Animation'
          title='Animation'
        />
        <Tab
          key='Youtube'
          title='Youtube'
        />
      </Tabs>
    </div>
  )
}
