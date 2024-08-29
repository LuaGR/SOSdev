'use client'

import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import { Item } from '@/types/item'

export default function Resource({ item }: { item: Item }) {
  const handleCardClick = () => {
    window.open(item.url, '_blank')
  }

  return (
    <Card
      shadow='sm'
      key={item.id}
      onClick={handleCardClick}
      isPressable>
      <CardBody className='overflow-visible p-0'>
        <Image
          shadow='sm'
          radius='lg'
          width='100%'
          alt={item.title}
          className='w-full object-cover h-[140px]'
          src={item.image}
        />
      </CardBody>
      <CardFooter className='text-small justify-between'>
        <b>{item.title}</b>
        <p className='text-default-500'>{item.category}</p>
      </CardFooter>
      <CardBody className='border-t-2'>
        <p className='text-default-400'>{item.description}</p>
      </CardBody>
    </Card>
  )
}
