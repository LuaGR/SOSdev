'use client'
import { Kbd } from '@nextui-org/kbd'
import { SearchIcon } from './icons'
import { Input } from '@nextui-org/input'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export default function SearchInput() {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams)
      const term = event.target.value

      if (term) {
        params.set('query', term)
      } else {
        params.delete('query')
      }

      // Resetear a la primera página cuando cambie la búsqueda
      params.set('page', '1')

      replace(`${pathName}?${params.toString()}`)
    },
    300
  )
  return (
    <Input
      aria-label='Search'
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-sm'
      }}
      endContent={
        <Kbd
          className='hidden lg:inline-block'
          keys={['command']}>
          K
        </Kbd>
      }
      labelPlacement='outside'
      placeholder='Search...'
      startContent={
        <SearchIcon className='text-base text-default-400 pointer-events-none flex-shrink-0' />
      }
      type='search'
      onChange={handleSearch}
      defaultValue={searchParams.get('query')?.toString()}
    />
  )
}
