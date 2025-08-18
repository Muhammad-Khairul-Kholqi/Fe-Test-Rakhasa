"use client"

import { useState } from "react"
import PrivateSidebar from "@/app/components/global/priveteSidebar"
import { Menu, X } from "lucide-react"

export default function LayoutPublic({ children }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex w-full">
            <PrivateSidebar open={open} setOpen={setOpen} />

            <div className="flex-1 md:ml-64 bg-gray-50 min-h-screen">
                <header className="flex justify-between items-center bg-white shadow-md p-4 sticky top-0 z-30">
                    <h1 className="text-lg font-semibold">Welcome back</h1>

                    <div className="flex items-center gap-3">
                        <span className="sm:block text-sm font-medium">Admin</span>
                        =
                        <button
                            className="md:hidden rounded-lg hover:bg-gray-100 p-2"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                </header>

                <main className="p-5">{children}</main>
            </div>
        </div>
    )
}
