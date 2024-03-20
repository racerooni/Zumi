"use client"
import React, { useState } from 'react'
import logo from "@/public/zumilogo.png"
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import Link from 'next/link'


export default function MarketNav() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('')
    const handleSubmit = (e: React.FormEvent<SubmitEvent>) => {
        e.preventDefault();

    }


    return (
        <nav className="w-full h-12 border-b border-black/20 flex items-center justify-between px-4 mb-4">
            <Image src={logo.src} alt="logo" width={100} height={50} />
            <form className="w-[20rem]" onSubmit={() => handleSubmit}>
                <input type="text" placeholder="Keresés" className="border-black/20 border rounded-full py-[4px] ps-2 w-full" onChange={(e) => { setSearchQuery(e.target.value) }} />
                <Link href={{
                    pathname: "/market/",
                    query: {
                        search: searchQuery
                    }
                }}>
                    <Search />
                </Link>

            </form>
            <div>
                <UserButton afterSignOutUrl='/' />
            </div>
        </nav>
    )
}
