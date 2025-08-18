// components/PublicNavbar.jsx
"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function PublicNavbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="flex justify-center bg-white shadow-md p-5 fixed top-0 left-0 right-0 z-50">
            <div className="w-full max-w-[1300px]">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Logo</h3>

                    <ul className="hidden md:flex items-center gap-8">
                        <Link href="#home">Home</Link>
                        <Link href="#hot-news">Hot News</Link>
                        <Link href="#sport-news">Sport</Link>
                        <Link href="#politic-news">Politic</Link>
                    </ul>

                    <button
                        className="md:hidden rounded-lg hover:bg-gray-100"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {open && (
                    <div className="mt-5 flex flex-col space-y-4 md:hidden">
                        <Link href="#home">Home</Link>
                        <Link href="#hot-news">Hot News</Link>
                        <Link href="#sport-news">Sport</Link>
                        <Link href="#politic-news">Politic</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}
