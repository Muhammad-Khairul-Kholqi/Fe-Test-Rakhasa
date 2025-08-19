"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Zap, Activity, FileText } from "lucide-react"

export default function PrivateSidebar({ open, setOpen }) {
    const pathname = usePathname()

    const menuItems = [
        { name: "Dashboard", href: "/pages/cms/dashboard", icon: Home },
        { name: "Hot News", href: "/pages/cms/hotNews", icon: Zap },
        { name: "Sports", href: "/pages/cms/sportsNews", icon: Activity },
        { name: "Politics", href: "/pages/cms/politicsNews", icon: FileText },
    ]

    const renderLink = (item) => {
        const Icon = item.icon
        const isActive = pathname === item.href

        return (
            <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-2 py-3 rounded-md transition-colors
                    ${isActive ? "bg-black text-white" : "hover:bg-black hover:text-white"}`}
            >
                <Icon size={18} />
                {item.name}
            </Link>
        )
    }

    return (
        <>
            <aside className="hidden md:flex flex-col w-64 bg-white h-screen shadow-md fixed left-0 top-0 p-5 z-40">
                <h2 className="text-2xl font-bold mb-10">MyApp</h2>
                <nav className="flex flex-col space-y-2">
                    {menuItems.map(renderLink)}
                </nav>
            </aside>

            {open && (
                <aside className="fixed top-0 left-0 w-64 h-screen bg-white shadow-md p-5 z-50 md:hidden">
                    <h2 className="text-2xl font-bold mb-10">MyApp</h2>
                    <nav className="flex flex-col space-y-4">
                        {menuItems.map(renderLink)}
                    </nav>
                </aside>
            )}
        </>
    )
}
