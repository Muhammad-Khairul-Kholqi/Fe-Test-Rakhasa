"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import GlobalModal from "@/app/components/modals/globalModal"
import newsData from "@/app/data/newsData"

const ITEMS_PER_PAGE = 6

export default function SportNewsPage() {
    const [search, setSearch] = useState("")
    const [modalOpen, setModalOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState("")

    const searchParams = useSearchParams()
    const router = useRouter()
    const pageParam = parseInt(searchParams.get("page") || "1", 10)
    const [currentPage, setCurrentPage] = useState(pageParam)

    const filteredNews = newsData.filter(
        (item) =>
            item.category === "Sport" &&
            item.title.toLowerCase().includes(search.toLowerCase())
    )

    const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE)

    const currentNews = filteredNews.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    )

    const openModal = (title) => {
        setModalTitle(title)
        setModalOpen(true)
    }

    const goToPage = (page) => {
        setCurrentPage(page)
        router.push(`?page=${page}`)
    }

    useEffect(() => {
        if (pageParam !== currentPage) setCurrentPage(pageParam)
    }, [pageParam])

    return (
        <div>
            <h2 className="text-xl font-semibold mb-5">Sports News</h2>
            <div className="flex flex-col md:flex-row justify-between mb-6 gap-3">
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

            {filteredNews.length === 0 ? (
                <div className="text-center text-gray-400 py-10">
                    No data found
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentNews.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col justify-between"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 flex flex-col flex-1">
                                    <div className="flex-1">
                                        <h2 className="font-semibold text-lg mb-2">{item.title}</h2>
                                        <p className="text-gray-600 text-sm mb-3 truncate">{item.description}</p>
                                        <p className="text-gray-400 text-xs mb-3">{item.date}</p>
                                    </div>
                                    <button
                                        className="px-3 py-1 bg-black text-white rounded-md hover:bg-gray-800 cursor-pointer w-full mt-auto"
                                        onClick={() => openModal("Edit Data")}
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex justify-center mt-6 gap-2">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    className={`px-3 py-1 rounded-md cursor-pointer ${currentPage === i + 1
                                            ? "bg-black text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                        }`}
                                    onClick={() => goToPage(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </>
            )}

            <GlobalModal open={modalOpen} setOpen={setModalOpen} title={modalTitle} />
        </div>
    )
}
