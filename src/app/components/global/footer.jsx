'use client'

import { useEffect, useState } from "react";
import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
    const [year, setYear] = useState(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-gray-100 py-6 px-5 mt-10">
            <div className="w-full max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                <div className="text-xl font-bold text-gray-800">
                    News
                </div>

                {year && (
                    <div className="text-gray-600 text-center md:text-left">
                        © {year} News. All rights reserved.
                    </div>
                )}

                <div className="flex gap-4">
                    <a href="#" className="text-gray-500 hover:text-gray-800 transition">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-800 transition">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-800 transition">
                        <Facebook size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
