'use client'

import { useEffect, useState } from "react";

export default function Footer() {
    const [year, setYear] = useState(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="flex justify-center px-5 py-2 mt-5 bg-gray-100">
            <div className="w-full max-w-[1300px]">
                {year && (
                    <h5 className="text-center">
                        © News - {year}
                    </h5>
                )}
            </div>
        </footer>
    )
}