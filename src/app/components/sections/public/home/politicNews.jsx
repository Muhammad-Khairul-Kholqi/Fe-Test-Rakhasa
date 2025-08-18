import Link from "next/link"
import Image from "next/image"
import newsData from "@/app/data/newsData"

function slugify(text) {
    return text.toLowerCase().replace(/\s+/g, "-")
}

export default function PoliticNews() {
    const politicNewsData = newsData.filter(item => item.category === "Politic")
    function truncateWords(text, maxWords = 10) {
        const words = text.split(" ")
        return words.length > maxWords
            ? words.slice(0, maxWords).join(" ") + "..."
            : text
    }

    return (
        <div className="flex justify-center p-5 mt-5">
            <div className="w-full max-w-[1300px]">
                <h1 className="mb-3 font-bold text-xl">Politics News</h1>

                <div className="w-full flex gap-5 overflow-x-auto flex-nowrap scrollbar-hide">
                    {politicNewsData.map((item, index) => (
                        <Link
                            key={index}
                            href={`/pages/${slugify(item.title)}`}
                            className="bg-white p-5 rounded-xl group space-y-2 border border-gray-200 hover:shadow-lg transition min-w-[280px] sm:min-w-[320px] mb-5"
                        >
                            <Image
                                src={item.image}
                                width={400}
                                height={200}
                                alt={item.title}
                                className="w-full h-[150px] rounded-lg object-cover group-hover:scale-105 duration-300"
                                unoptimized
                            />
                            <h1 className="text-xl font-semibold group-hover:underline">{item.title}</h1>
                            <p className="text-sm text-gray-600">
                                {truncateWords(item.description, 10)}
                            </p>
                            <h2 className="text-sm text-gray-600">{item.date}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
