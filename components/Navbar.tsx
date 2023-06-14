import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { AiOutlineUser } from 'react-icons/ai'
import { IoLogOutOutline } from 'react-icons/io5'
import { CiShoppingBasket, CiShop, CiMenuFries, CiHome } from 'react-icons/ci'
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"






const Navbar = () => {
  return (
    <Menubar className='border-none flex justify-between'>
      <Link href="/">
        <p className='font-medium font-serif text-xl hover:opacity-70'>Goodiees</p>
      </Link>

      <Dialog>
        <DialogTrigger>
          <CiMenuFries className='md:hidden cursor-pointer text-lg'/>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='text-start font-medium'>Goodiees</DialogTitle>
            {/* <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription> */}
          </DialogHeader>
          <ul className='flex flex-col items-start justify-between'>
            <Link className='text-sm px-2 py-2 w-full flex items-center hover:bg-gray-200' href="/">
            <CiHome className='text-lg'/>
              <p className='ms-1'>Home</p>
            </Link>
            <Link className='text-sm px-2 py-2 w-full flex items-center hover:bg-gray-200' href="/shop">
              <CiShop className='text-lg'/>
              <p className='ms-1'>Shop</p>
            </Link>
            <Link className='text-sm px-2 py-2 w-full flex items-center hover:bg-gray-200' href="/cart">
              <CiShoppingBasket className='text-lg'/>
              <p className='ms-1'>Cart</p>
            </Link>

            <Link className='text-sm border-t px-2 w-full py-2 flex items-center hover:bg-gray-200' href="/cart">
              <AiOutlineUser className='text-lg'/>
              <p className='ms-1'>Edit profile</p>
            </Link>
            <Link className='text-sm px-2 py-2 flex w-full items-center hover:bg-gray-200' href="/cart">
              <IoLogOutOutline className='me-1 text-lg'/>
              <p className='ms-1'>Log Out</p>
            </Link>
          </ul>
        </DialogContent>
      </Dialog>

      <ul className='md:flex items-center justify-between hidden'>
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
              <Link href="/auth">
                Log Out
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </ul>
    </Menubar>
  )
}

export default Navbar
