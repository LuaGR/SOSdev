import { Card } from '@nextui-org/card'
import { Skeleton } from '@nextui-org/skeleton'

export default function SkeletonItems() {
  return (
    <div className='gap-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 m-0 p-0'>
      {Array.from({ length: 8 }).map((_, index) => (
        <Card
          key={index}
          className='w-[300px] space-y-5 p-4'
          radius='lg'>
          <Skeleton className='rounded-lg'>
            <div className='h-[120px] w-full rounded-lg bg-default-300'></div>
          </Skeleton>
          <div className='space-y-3'>
            <Skeleton className='w-3/5 rounded-lg'>
              <div className='h-3 w-3/5 rounded-lg bg-default-200'></div>
            </Skeleton>
            <Skeleton className='w-4/5 rounded-lg'>
              <div className='h-3 w-4/5 rounded-lg bg-default-200'></div>
            </Skeleton>
            <Skeleton className='w-2/5 rounded-lg'>
              <div className='h-3 w-2/5 rounded-lg bg-default-300'></div>
            </Skeleton>
          </div>
        </Card>
      ))}
    </div>
  )
}
