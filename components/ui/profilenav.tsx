import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from './button'
import { Undo2 } from 'lucide-react'

export default function ProfileNav() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <div>
                    <Link href={"/dashboard"}>
                        <Button>
                            <Undo2 className="h-4 w-4 me-2" />
                            Vissza a boltjaimhoz!
                        </Button>
                    </Link>
                </div>
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </div>
    )
}
