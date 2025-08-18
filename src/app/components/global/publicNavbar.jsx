"use client"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function PublicNavbar() {
    const [open, setOpen] = useState(false)
    const [scrollTarget, setScrollTarget] = useState(null)
    const [isClient, setIsClient] = useState(false) 

    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        setIsClient(true) 
    }, [])

    const sections = [
        { name: "Home", id: "home" },
        { name: "Hot News", id: "hot-news" },
        { name: "Sport", id: "sport-news" },
        { name: "Politic", id: "politic-news" },
    ]

    const handleScroll = (id) => {
        setOpen(false)
        if (pathname !== "/") {
            setScrollTarget(id)
            router.push("/")
        } else {
            const el = document.getElementById(id)
            if (el) el.scrollIntoView({ behavior: "smooth" })
        }
    }

    useEffect(() => {
        if (scrollTarget && pathname === "/") {
            const el = document.getElementById(scrollTarget)
            if (el) el.scrollIntoView({ behavior: "smooth" })
            setScrollTarget(null)
        }
    }, [pathname, scrollTarget])

    if (!isClient) return null

    return (
        <nav className="flex justify-center bg-white shadow-md p-5 fixed top-0 left-0 right-0 z-50">
            <div className="w-full max-w-[1300px]">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Logo</h3>

                    <ul className="hidden md:flex items-center gap-8">
                        {sections.map((sec) => (
                            <li key={sec.id}>
                                <button
                                    onClick={() => handleScroll(sec.id)}
                                    className="cursor-pointer"
                                >
                                    {sec.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="md:hidden rounded-lg hover:bg-gray-100 p-2"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {open && (
                    <div className="mt-5 flex flex-col space-y-4 md:hidden">
                        {sections.map((sec) => (
                            <button
                                key={sec.id}
                                onClick={() => handleScroll(sec.id)}
                                className="text-left cursor-pointer"
                            >
                                {sec.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}
