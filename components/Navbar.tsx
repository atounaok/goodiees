'use client';

import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { AiOutlineUser } from 'react-icons/ai'
import { IoLogOutOutline, IoLogInOutline } from 'react-icons/io5'
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
} from "@/components/ui/dialog";
import { useRouter } from 'next/navigation';
import useAuthModal from '@/hooks/useAuthModal';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useUser } from '@/hooks/useUser';
import toast from 'react-hot-toast';






const Navbar = () => {
  const router = useRouter();
  const authModal = useAuthModal();
  const supabaseClient = useSupabaseClient();

  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();

    if(error){
      toast.error(error.message);
    }else{
      toast.success('Logged out!');
    }
  }

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
            {user? (
              <>
                <Link className='text-sm px-2 py-2 w-full flex items-center hover:bg-gray-200' href="/cart">
                  <CiShoppingBasket className='text-lg'/>
                  <p className='ms-1'>Cart</p>
                </Link>

                <Link className='text-sm border-t px-2 w-full py-2 flex items-center hover:bg-gray-200' href="/account">
                  <AiOutlineUser className='text-lg'/>
                  <p className='ms-1'>Edit profile</p>
                </Link>
                <button className='text-sm px-2 py-2 flex w-full items-center hover:bg-gray-200' onClick={handleLogout}>
                  <IoLogOutOutline className='me-1 text-lg'/>
                  <p className='ms-1'>Log Out</p>
                </button>
              </>
            ) : (
              <>
                <button className='text-sm px-2 py-2 flex w-full items-center hover:bg-gray-200' onClick={authModal.onOpen}>
                  <IoLogInOutline className='me-1 text-lg'/>
                  <p className='ms-1'>Log in</p>
                </button>
              </>
            )}
          </ul>
        </DialogContent>
      </Dialog>

      <ul className='md:flex items-center justify-between hidden'>
        <Link className='text-sm px-4 py-2 hover:bg-gray-200' href="/">
          Home
        </Link>
        <Link className='mx-3 text-sm px-4 py-2 flex items-center hover:bg-gray-200' href="/shop">
          <CiShop className='text-lg'/>
          <p className='ms-1'>Shop</p>
        </Link>
        
        {user? 
        (
          <>
            <Link className='text-sm me-3 px-4 py-2 flex items-center hover:bg-gray-200' href="/cart">
              <CiShoppingBasket className='text-lg'/>
              <p className='ms-1'>Cart</p>
            </Link>
            <MenubarMenu>
              <MenubarTrigger className='hover:opacity-80 cursor-pointer'>
                <AiOutlineUser className='me-1'/>
                <p>Profile</p>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem inset onClick={() => router.push('/account')} className='cursor-pointer'>
                  <AiOutlineUser className='me-1'/>
                  <p>Edit profile</p>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset onClick={handleLogout} className='cursor-pointer'>
                  <IoLogOutOutline className='me-1 text-lg'/>
                  <p>Log Out</p>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </>
        ) : (
          <>
            <button onClick={authModal.onOpen} className="
              text-neutral-100
              hover:text-neutral-300
              bg-black px-5 py-2 rounded-md
              font-medium
            ">
                Log in
            </button>
          </>
        )}
      </ul>
    </Menubar>
  )
}

export default Navbar
