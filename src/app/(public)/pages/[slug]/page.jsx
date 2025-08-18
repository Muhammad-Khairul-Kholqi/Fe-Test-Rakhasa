import Image from "next/image"
import Link from "next/link"
import newsData from "@/app/data/newsData"

function slugify(text) {
    return text.toLowerCase().replace(/\s+/g, "-")
}

export default async function DetailNewsPage({ params }) {
    const { slug } = await params 

    const newsItem = newsData.find(item => slugify(item.title) === slug)
    if (!newsItem) {
        return <div className="p-10 text-center">Berita tidak ditemukan.</div>
    }

    const relatedNews = newsData
        .filter(item => item.category === newsItem.category && slugify(item.title) !== slug)
        .slice(0, 4)

    return (
        <div className="flex justify-center p-5">
            <div className="w-full max-w-[1300px] flex flex-col md:flex-row gap-5 items-start">
                <div className="w-full md:max-w-[65%] bg-white rounded-xl p-5 shadow">
                    <Image
                        src={newsItem.image}
                        alt={newsItem.title}
                        width={800}
                        height={400}
                        unoptimized
                        className="w-full h-[350px] object-cover rounded-xl border border-gray-200 mb-5"
                    />
                    <h1 className="text-3xl font-bold mb-3">{newsItem.title}</h1>
                    <p className="text-gray-500 mb-5">{newsItem.date}</p>
                    <p className="text-lg leading-relaxed">{newsItem.description}</p>
                </div>

                <div className="w-full md:max-w-[35%] flex flex-col space-y-3">
                    <h2 className="text-xl font-semibold mb-2">Other  {newsItem.category} News</h2>
                    {relatedNews.map((item, index) => (
                        <Link
                            key={index}
                            href={`/pages/${slugify(item.title)}`}
                            className="flex items-center gap-5 w-full group bg-white p-3 rounded-lg shadow hover:shadow-md transition"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={100}
                                height={100}
                                unoptimized
                                className="w-[100px] h-[100px] rounded-lg object-cover border border-gray-200"
                            />
                            <div className="flex flex-col">
                                <h3 className="text-lg font-semibold group-hover:underline">{item.title}</h3>
                                <p className="text-sm text-gray-700 line-clamp-2">{item.description}</p>
                                <span className="text-sm text-blue-600">{item.date}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
