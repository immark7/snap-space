import { AirVent, GithubIcon } from 'lucide-react'
import React from 'react'
import Link from "next/link";
import ModeToggle from './ModeToggle';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-3 sticky top-0 bg-background/50 backdrop-blur z-30">
    <div className="flex items-center space-x-3">
      <AirVent className="w-6 h-6" />
      <h2 className="font-bold">Snapspace</h2>
    </div>
    <div>
      <Link href={'https://github.com/immark7'} target="_blank" className={cn(buttonVariants({ size: 'sm' , variant: 'ghost' }))}>
        <GithubIcon className="w-5 h-5" />
      </Link>
      <ModeToggle />
    </div>
  </nav>  )
}

export default NavBar