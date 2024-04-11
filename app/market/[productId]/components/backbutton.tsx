"use client"
import { ArrowLeftCircle } from "lucide-react"
import Link from "next/link"

const BackButton = () => {
    return (
   
        
        <div onClick={() => {window.history.go(-1)}} className="bg-yellow-400 absolute top-2 left-5 h-12 w-12 rounded-full cursor-pointer">
            <ArrowLeftCircle className="h-12 w-12" />
        </div>
        
    )
}

export default BackButton;