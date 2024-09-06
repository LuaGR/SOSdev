'use client'

import { InfiniteSlider } from './core-infinite-slider'
import { useRouter, useSearchParams } from 'next/navigation'
import { Key } from 'react'

export function InfiniteSliderHoverSpeed() {
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
    <InfiniteSlider
      durationOnHover={75}
      gap={24}>
      <div className='border rounded-md py-1 px-4'>
        <button
          onClick={() => handleTabChange('all')}
          className={category === 'all' ? 'font-bold' : ''}>
          All
        </button>
      </div>
      <div className='border rounded-md py-1 px-4'>
        <button
          onClick={() => handleTabChange('AI')}
          className={category === 'AI' ? 'font-bold' : ''}>
          AI
        </button>
      </div>
      <div className='border rounded-md py-1 px-4'>
        <button
          onClick={() => handleTabChange('SVG')}
          className={category === 'SVG' ? 'font-bold' : ''}>
          SVG
        </button>
      </div>
      <div className='border rounded-md py-1 px-4'>
        <button
          onClick={() => handleTabChange('System Design')}
          className={category === 'system-design' ? 'font-bold' : ''}>
          System Design
        </button>
      </div>
      <div className='border rounded-md py-1 px-4'>
        <button
          onClick={() => handleTabChange('API')}
          className={category === 'API' ? 'font-bold' : ''}>
          API
        </button>
      </div>
    </InfiniteSlider>
  )
}
