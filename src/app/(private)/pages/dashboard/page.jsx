"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function DashboardPage() {
    const data = [
        { name: "Total", value: 120 },
        { name: "Sports", value: 45 },
        { name: "Politics", value: 30 },
        { name: "Hot News", value: 20 },
    ]

    return (
        <div className="space-y-8">
            <h2 className="text-xl font-semibold">Dashboard Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-white p-5 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold">Total News</h3>
                    <p className="text-2xl font-bold mt-2">120</p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold">Sports News</h3>
                    <p className="text-2xl font-bold mt-2">45</p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold">Politics News</h3>
                    <p className="text-2xl font-bold mt-2">30</p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold">Hot News</h3>
                    <p className="text-2xl font-bold mt-2">20</p>
                </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-5">News Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#000" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
