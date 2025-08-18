"use client"

import { useState } from "react"
import GlobalModal from "@/app/components/modals/globalModal"
import newsData from "@/app/data/newsData"

export default function HotNewsPage() {
    const [search, setSearch] = useState("")
    const [modalOpen, setModalOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState("")

    const hotNews = newsData.filter(
        (item) =>
            item.category === "Hot" &&
            item.title.toLowerCase().includes(search.toLowerCase())
    )

    const openModal = (title) => {
        setModalTitle(title)
        setModalOpen(true)
    }

    return (
        <div>
            {/* Search & Add Button */}
            <div className="flex flex-col md:flex-row justify-between mb-4 gap-3">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-200 px-4 py-2 rounded-md w-full md:w-1/2 outline-none"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 shadow-sm cursor-pointer"
                    onClick={() => openModal("Add Data")}
                >
                    Add Data
                </button>
            </div>

            {/* Table */}
            {/* <div className="overflow-x-auto bg-white p-5 rounded-xl shadow-sm">
                <table className="min-w-max w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-gray-600">No</th>
                            <th className="px-4 py-3 text-left text-gray-600">Image</th>
                            <th className="px-4 py-3 text-left text-gray-600">Title</th>
                            <th className="px-4 py-3 text-left text-gray-600">Description</th>
                            <th className="px-4 py-3 text-left text-gray-600">Date</th>
                            <th className="px-4 py-3 text-left text-gray-600">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {hotNews.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-4 py-5 text-center text-gray-400">
                                    No data found
                                </td>
                            </tr>
                        ) : (
                            hotNews.map((item, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-3">{idx + 1}</td>
                                    <td className="px-4 py-3">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-20 h-14 object-cover rounded-md"
                                        />
                                    </td>
                                    <td className="px-4 py-3 font-medium">{item.title}</td>
                                    <td className="px-4 py-3 truncate max-w-xs">{item.description}</td>
                                    <td className="px-4 py-3">{item.date}</td>
                                    <td className="px-4 py-3">
                                        <button
                                            className="px-3 py-1 bg-black text-white rounded-md hover:bg-gray-800 cursor-pointer"
                                            onClick={() => openModal("Edit Data")}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div> */}

            {/* Modal */}
            <GlobalModal open={modalOpen} setOpen={setModalOpen} title={modalTitle} />
        </div>
    )
}
