"use client"

import { X } from "lucide-react"
import { useState } from "react"

export default function GlobalModal({ open, setOpen, title }) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        image: "",
    })

    if (!open) return null

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md relative shadow-lg">
                <button 
                    className="absolute top-3 right-3 text-gray-500 hover:text-black cursor-pointer"
                    onClick={() => setOpen(false)}
                >
                    <X size={20} />
                </button>
                <h2 className="text-xl font-bold mb-4">{title}</h2>

                <div className="flex flex-col gap-3">
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                        className="border px-3 py-2 rounded-md w-full"
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="border px-3 py-2 rounded-md w-full"
                    />
                    <input
                        type="text"
                        name="date"
                        placeholder="Date"
                        value={formData.date}
                        onChange={handleChange}
                        className="border px-3 py-2 rounded-md w-full"
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={formData.image}
                        onChange={handleChange}
                        className="border px-3 py-2 rounded-md w-full"
                    />
                </div>

                <div className="mt-5 flex justify-end gap-2">
                    <button
                        className="px-4 py-2 cursor-pointer bg-gray-300 rounded-md hover:bg-gray-400"
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 cursor-pointer bg-black text-white rounded-md hover:bg-gray-800"
                        onClick={() => setOpen(false)}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}
