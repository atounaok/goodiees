import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { AiOutlineUser } from 'react-icons/ai'
import { IoLogOutOutline } from 'react-icons/io5'
import { CiShoppingBasket, CiShop } from 'react-icons/ci'
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"





const Navbar = () => {
  return (
    <Menubar className='border-none flex justify-between'>
      <Link href="/">
        <p className='font-medium font-serif text-xl hover:opacity-70'>Goodiees</p>
      </Link>

      <ul className='flex items-center justify-between'>
        <Link className='text-sm px-4 py-2 hover:bg-gray-200' href="/">
          Home
        </Link>
        <Link className='text-sm px-4 py-2 flex items-center hover:bg-gray-200' href="/shop">
          <CiShop className='text-lg'/>
          <p className='ms-1'>Shop</p>
        </Link>
        <Link className='text-sm px-4 py-2 flex items-center hover:bg-gray-200' href="/cart">
          <CiShoppingBasket className='text-lg'/>
          <p className='ms-1'>Cart</p>
        </Link>
        <MenubarMenu>
          <MenubarTrigger className='hover:opacity-80 cursor-pointer'>
            <AiOutlineUser className='me-1'/>
            <p>Profile</p>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem inset className='cursor-pointer'>
              <AiOutlineUser className='me-1'/>
              <p>Edit profile</p>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset className='cursor-pointer'>
              <IoLogOutOutline className='me-1 text-lg'/>
              <p>Log Out</p>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </ul>
    </Menubar>
  )
}

export default Navbar
