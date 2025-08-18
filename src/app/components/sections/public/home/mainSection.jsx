"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import newsData from "@/app/data/newsData"

function slugify(text) {
    return text.toLowerCase().replace(/\s+/g, "-")
}

export default function MainSection() {
    const [current, setCurrent] = useState(0)
    const sliderData = newsData.slice(0, 4) 

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % sliderData.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [sliderData.length])

    function truncateWords(text, maxWords = 10) {
        const words = text.split(" ")
        return words.length > maxWords
            ? words.slice(0, maxWords).join(" ") + "..."
            : text
    }

    return (
        <div className="flex justify-center p-5">
            <div className="w-full max-w-[1300px]">
                <div className="w-full flex flex-col md:flex-row gap-5 items-start">

                    <div className="relative w-full md:max-w-[65%] h-[250px] md:h-[440px] overflow-hidden rounded-xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={sliderData[current].image}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={sliderData[current].image}
                                    alt={sliderData[current].title}
                                    fill
                                    unoptimized
                                    className="object-cover rounded-xl border border-gray-200"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                                    <h1 className="text-xl md:text-2xl font-bold">{sliderData[current].title}</h1>
                                    <p className="text-sm">{sliderData[current].description}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                            {sliderData.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrent(idx)}
                                    className={`w-4 h-1 rounded-full cursor-pointer ${idx === current ? "bg-white" : "bg-gray-400/70"}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:max-w-[35%] flex flex-col space-y-3">
                        {newsData.slice(0, 4).map((item, index) => (
                            <Link
                                key={index}
                                href={`/pages/${slugify(item.title)}`}
                                className="flex items-center gap-5 w-full group"
                            >
                                <div className="w-full max-w-[30%]">
                                    <Image
                                        width={100}
                                        height={100}
                                        alt={item.title}
                                        className="w-full h-[100px] rounded-lg object-cover border border-gray-200"
                                        unoptimized
                                        src={item.image}
                                    />
                                </div>
                                <div className="w-full max-w-[70%]">
                                    <div className="flex flex-col space-y-1">
                                        <h1 className="text-lg font-semibold group-hover:underline">{item.title}</h1>
                                        <p className="text-sm text-gray-600">
                                            {truncateWords(item.description, 10)}
                                        </p>
                                        <h3 className="text-sm text-blue-600">{item.date}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}
