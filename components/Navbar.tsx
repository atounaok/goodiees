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
import Image from 'next/image';



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
    <Menubar className='border-none bg-transparent text-white flex justify-between'>
      <Link href="/">
        <p className='font-medium font-serif text-xl hover:opacity-70'>Goodiees</p>
      </Link>

      <div className="flex items-center">
        {!user? (
          <button className='text-sm md:hidden me-2 px-4 rounded-lg py-2 flex items-center' onClick={authModal.onOpen}>
            <p className='ms-1 text-white font-semibold'>Log in</p>
          </button>
        ) : (
          <></>
        )}

        <Dialog>
          <DialogTrigger>
            <CiMenuFries className='md:hidden cursor-pointer text-lg'/>
          </DialogTrigger>
          <DialogContent className='h-full flex flex-col'>
            <DialogHeader className=''>
              <DialogTitle className='text-start font-medium'>
                <Link href="/">
                  Goodiees
                </Link>   
              </DialogTitle>
            </DialogHeader>
            
            <ul className='flex flex-wrap  items-start gap-2  justify-between'>
              <Link className='text-xl justify-center rounded-md w-[49%] py-12 flex items-center bg-gray-200' href="/shop">
                <CiShop className='text-3xl'/>
                <p className='ms-1 font-extralight'>Shop</p>
              </Link>
              {user? (
                <>
                  <Link className='justify-center text-xl rounded-md py-12 w-[49%] flex items-center bg-gray-200' href="/cart">
                    <CiShoppingBasket className='text-3xl'/>
                    <p className='ms-1 font-extralight'>Cart</p>
                  </Link>

                  <Link className='text-xl justify-center rounded-md w-[49%] py-12 flex items-center bg-gray-200' href="/account">
                    <AiOutlineUser className='text-3xl'/>
                    <p className='ms-1 font-extralight'>Profile</p>
                  </Link>
                  <button className='text-xl justify-center rounded-md py-12 flex w-[49%] items-center bg-gray-200' onClick={handleLogout}>
                    <IoLogOutOutline className='me-1 text-3xl'/>
                    <p className='ms-1 font-extralight'>Log Out</p>
                  </button>
                </>
              ) : (
                <>
                </>
              )}
            </ul>
          </DialogContent>
        </Dialog>
      </div>

      <ul className='md:flex font-thin items-center justify-between hidden'>
        <Link className='mx-3 text-sm flex items-center hover:text-neutral-400' href="/shop">
          <CiShop className='text-lg'/>
          <p className='ms-1'>Shop</p>
        </Link>
        
        {user? 
        (
          <>
            <Link className='text-sm me-3 flex items-center hover:text-neutral-400' href="/cart">
              <CiShoppingBasket className='text-lg'/>
              <p className='ms-1'></p>
            </Link>
            <MenubarMenu>
              <MenubarTrigger className='hover:opacity-80 p-0 cursor-pointer'>
                {user?.user_metadata?.avatar_url ? (<Image className='rounded-sm' src={user?.user_metadata?.avatar_url} width={40} height={40} alt='Avatar' />) : (
                  <>
                    <AiOutlineUser className='me-1'/>
                    <p className='font-thin'>Profile</p>
                  </>
                )}
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
              bg-transparent
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
