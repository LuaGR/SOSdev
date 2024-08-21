'use client'

import { Tab, Tabs } from '@nextui-org/tabs'
import { useRouter, useSearchParams } from 'next/navigation'
import { Key } from 'react'

export default function Filters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const category = searchParams.get('category') || 'all'

  const handleTabChange = (key: Key) => {
    const params = new URLSearchParams(searchParams)
    params.set('category', String(key))
    params.set('page', '1')
    router.replace(`?${params.toString()}`)
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
