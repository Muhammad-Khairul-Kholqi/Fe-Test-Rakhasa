import Image from "next/image"
import Link from "next/link"

const newsData = [
    {
        title: "Breaking News",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, omnis.",
        date: "23 - Jan - 2026",
        image: "https://img.freepik.com/free-photo/news-anchor-announces-car-accident-news_482257-114861.jpg?w=740"
    },
    {
        title: "Sports Update",
        description: "Latest updates from the sports world you need to know.",
        date: "20 - Jan - 2026",
        image: "https://img.freepik.com/free-photo/news-anchor-announces-car-accident-news_482257-114861.jpg?w=740"
    },
    {
        title: "Technology Insights",
        description: "New innovations shaping the future of technology.",
        date: "15 - Jan - 2026",
        image: "https://img.freepik.com/free-photo/news-anchor-announces-car-accident-news_482257-114861.jpg?w=740"
    },
    {
        title: "Health & Wellness",
        description: "Tips and trends for a healthier lifestyle in the new year.",
        date: "08 - Jan - 2026",
        image: "https://img.freepik.com/free-photo/news-anchor-announces-car-accident-news_482257-114861.jpg?w=740"
    },
]

export default function MainSection() {
    return  (
        <div className="flex justify-center p-5">
            <div className="w-full max-w-[1300px]">
                <div className="w-full flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-full md:max-w-[65%]">
                        <Image
                            width={100}
                            height={100}
                            alt="main news"
                            className="w-full h-[250px] md:h-[440px] rounded-xl object-cover"
                            unoptimized
                            src="https://img.freepik.com/free-photo/news-anchor-announces-car-accident-news_482257-114861.jpg?w=740"
                        />
                    </div>

                    <div className="w-full md:max-w-[35%] flex flex-col space-y-3">
                        {newsData.map((item, index) => (
                            <Link href="" key={index} className="flex items-center gap-5 w-full group">
                                <div className="w-full max-w-[30%]">
                                    <Image
                                        width={100}
                                        height={100}
                                        alt={item.title}
                                        className="w-full h-[100px] rounded-lg object-cover"
                                        unoptimized
                                        src={item.image}
                                    />
                                </div>

                                <div className="w-full max-w-[70%]">
                                    <div className="flex flex-col space-y-1">
                                        <h1 className="text-lg font-semibold group-hover:underline">{item.title}</h1>
                                        <p className="text-sm text-gray-700 group-hover:underline">{item.description}</p>
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