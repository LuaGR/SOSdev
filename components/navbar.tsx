'use client'
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand
} from '@nextui-org/navbar'

import NextLink from 'next/link'

import { ThemeSwitch } from '@/components/navbar/theme-switch'
import { Logo } from '@/components/navbar/icons'
import SearchInput from './navbar/search-input'

export const Navbar = () => {
  return (
    <NextUINavbar
      maxWidth='xl'
      position='sticky'>
      <NavbarContent
        className='basis-1/5 sm:basis-full'
        justify='start'>
        <NavbarBrand
          as='li'
          className='gap-3 max-w-fit'>
          <NextLink
            className='flex justify-start items-center gap-1'
            href='/'>
            <Logo />
            <p className='font-bold text-inherit'>SOSdev</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className=' basis-1 pl-4'
        justify='end'>
        <div className='w-4/5 sm:w-3/5'>
          <SearchInput />
        </div>

        <ThemeSwitch />
      </NavbarContent>
    </NextUINavbar>
  )
}
