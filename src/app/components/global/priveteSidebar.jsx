import Link from "next/link"
import { Home, Users, Settings, FileText } from "lucide-react"

export default function PrivateSidebar({ open, setOpen }) {
    return (
        <>
            <aside className="hidden md:flex flex-col w-64 bg-white h-screen shadow-md fixed left-0 top-0 p-5 z-40">
                <h2 className="text-2xl font-bold mb-10">MyApp</h2>
                <nav className="flex flex-col space-y-5">
                    <Link href="#" className="flex items-center gap-2 hover:text-blue-600">
                        <Home size={18} /> Dashboard
                    </Link>
                    <Link href="#" className="flex items-center gap-2 hover:text-blue-600">
                        <Users size={18} /> Users
                    </Link>
                    <Link href="#" className="flex items-center gap-2 hover:text-blue-600">
                        <FileText size={18} /> Reports
                    </Link>
                    <Link href="#" className="flex items-center gap-2 hover:text-blue-600">
                        <Settings size={18} /> Settings
                    </Link>
                </nav>
            </aside>

            {open && (
                <aside className="fixed top-0 left-0 w-64 h-screen bg-white shadow-md p-5 z-50 md:hidden">
                    <h2 className="text-2xl font-bold mb-10">MyApp</h2>
                    <nav className="flex flex-col space-y-4">
                        <Link href="#" className="flex items-center gap-2 hover:text-blue-600">
                            <Home size={18} /> Dashboard
                        </Link>
                        <Link href="#" className="flex items-center gap-2 hover:text-blue-600">
                            <Users size={18} /> Users
                        </Link>
                        <Link href="#" className="flex items-center gap-2 hover:text-blue-600">
                            <FileText size={18} /> Reports
                        </Link>
                        <Link href="#" className="flex items-center gap-2 hover:text-blue-600">
                            <Settings size={18} /> Settings
                        </Link>
                    </nav>
                </aside>
            )}
        </>
    )
}
