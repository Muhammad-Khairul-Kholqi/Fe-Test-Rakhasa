"use client"

import { Users, Newspaper, Globe, BarChart2 } from "lucide-react"

export default function Statistics() {
    const stats = [
        { icon: <Users size={30} />, value: "10K+", label: "Readers" },
        { icon: <Newspaper size={30} />, value: "500+", label: "Articles" },
        { icon: <Globe size={30} />, value: "20+", label: "Countries Covered" },
        { icon: <BarChart2 size={30} />, value: "95%", label: "Satisfaction Rate" },
    ]

    return (
        <div className="flex justify-center p-5 mt-5">
            <div className="w-full max-w-[1300px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                    >
                        {stat.icon}
                        <h3 className="text-3xl font-bold mt-3 text-gray-900">{stat.value}</h3>
                        <p className="text-gray-600 mt-1 text-center">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
