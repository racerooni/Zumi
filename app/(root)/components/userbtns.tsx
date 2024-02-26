import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'


export default function UserBtns() {
    return (

        <div><Link href="/sign-in">
            <Button variant="secondary">Login</Button>
        </Link>
            {' '}
            or
            {' '}
            <Button variant="ghost" className="border border-black/10">Register</Button></div>
    )
}
