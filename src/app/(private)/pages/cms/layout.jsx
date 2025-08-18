"use client"

import { useState } from "react"
import PrivateSidebar from "@/app/components/global/priveteSidebar"
import PrivateHeader from "@/app/components/global/privateHeader" 

export default function LayoutPublic({ children }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex w-full">
            <PrivateSidebar open={open} setOpen={setOpen} />

            <div className="flex-1 md:ml-64 bg-gray-50 min-h-screen">
                <PrivateHeader open={open} setOpen={setOpen} />
                <main className="p-5">{children}</main>
            </div>
        </div>
    )
}
