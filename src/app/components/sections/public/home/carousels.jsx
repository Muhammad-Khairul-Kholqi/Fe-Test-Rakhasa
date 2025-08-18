"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const mainSlides = [
    { title: "Welcome to Our News Portal", subtitle: "Stay updated with the latest headlines", image: "https://img.freepik.com/free-photo/solar-panel-energy_53876-124461.jpg?w=740" },
    { title: "Discover Trending Stories", subtitle: "Explore what's happening around the world", image: "https://img.freepik.com/free-photo/diplomats-handshake_53876-124462.jpg?w=740" },
    { title: "Your Daily Insight", subtitle: "Get curated news every day", image: "https://img.freepik.com/free-photo/olympic-athletes-competition_654080-1092.jpg?w=740" },
]

const sideImages = ["/images/side1.jpg", "/images/side2.jpg"]

export default function Carousels() {
    const [current, setCurrent] = useState(0)
    const length = mainSlides.length

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1))
        }, 5000)
        return () => clearInterval(timer)
    }, [length])

    return (
        <div className="flex justify-center p-5 mt-5 bg-gray-100">
            <div className="w-full max-w-[1300px] flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-3/5 relative rounded-xl overflow-hidden shadow-lg h-[250px] md:h-[350px]">
                    {mainSlides.map((slide, index) => (
                        <div
                            key={index}
                            className={`w-full transition-all duration-700 ${index === current ? "block" : "hidden"
                                }`}
                        >
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                width={800}
                                height={350}
                                className="w-full h-full object-cover"
                                priority
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/25 flex flex-col justify-center items-start p-5 md:p-10 text-white">
                                <h2 className="text-xl md:text-2xl font-bold mb-1">{slide.title}</h2>
                                <p className="text-sm md:text-lg">{slide.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full md:w-2/5 flex flex-col gap-5 h-[250px] md:h-[350px]">
                    <div className="relative w-full flex-1 rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="https://img.freepik.com/free-photo/olympic-athletes-competition_654080-1092.jpg?w=740"
                            alt="Side image 1"
                            width={600}
                            height={175}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>

                    <div className="relative w-full flex-1 rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="https://img.freepik.com/free-photo/journalist-press-conference_53876-104422.jpg?w=740"
                            alt="Side image 2"
                            width={600}
                            height={175}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
