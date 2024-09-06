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
    <div className='flex justify-center'>
      <Tabs
        variant='bordered'
        aria-label='Tabs variants'
        onSelectionChange={handleTabChange}
        selectedKey={category}
        className='w-96 sm:w-5/6 md:w-full'>
        <Tab
          key='all'
          title='All'
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
          key='Design System'
          title='Design System'
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
        <Tab
          key='AI'
          title='AI'
        />
      </Tabs>
    </div>
  )
}
