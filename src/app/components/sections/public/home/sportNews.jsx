import Link from "next/link"
import Image from "next/image"

const sportNewsData = [
    {
        title: "Breaking News",
        description: "Latest update on global events you shouldn’t miss.",
        date: "23 - Apr - 2024",
        image: "https://img.freepik.com/free-photo/news-anchor-announces-car-accident-news_482257-114861.jpg?w=740"
    },
    {
        title: "Sports Highlight",
        description: "Biggest moments in the world of sports today.",
        date: "22 - Apr - 2024",
        image: "https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1091.jpg?w=740"
    },
    {
        title: "Technology Insights",
        description: "Discover the latest in AI and tech innovations.",
        date: "21 - Apr - 2024",
        image: "https://img.freepik.com/free-photo/futuristic-technology-screen_53876-97647.jpg?w=740"
    },
    {
        title: "Health & Wellness",
        description: "Tips and research for a healthier lifestyle.",
        date: "20 - Apr - 2024",
        image: "https://img.freepik.com/free-photo/doctor-discussing-healthcare-report_482257-114862.jpg?w=740"
    },
    {
        title: "Entertainment Buzz",
        description: "What’s trending in movies and music this week.",
        date: "19 - Apr - 2024",
        image: "https://img.freepik.com/free-photo/people-enjoying-concert-nightclub_23-2148921985.jpg?w=740"
    },
    {
        title: "World Politics",
        description: "Key stories shaping international relations.",
        date: "18 - Apr - 2024",
        image: "https://img.freepik.com/free-photo/handshake-between-politicians_23-2148920312.jpg?w=740"
    },
    {
        title: "Business News",
        description: "Market trends and financial updates for you.",
        date: "17 - Apr - 2024",
        image: "https://img.freepik.com/free-photo/financial-graphs-stock-market_53876-124450.jpg?w=740"
    },
    {
        title: "Travel Stories",
        description: "Top destinations and travel inspirations.",
        date: "16 - Apr - 2024",
        image: "https://img.freepik.com/free-photo/travel-concept-with-baggage-airplane_23-2149153256.jpg?w=740"
    },
]

export default function SportNews() {
    return (
        <div className="flex justify-center p-5 mt-5">
            <div className="w-full max-w-[1300px]">
                <h1 className="mb-3 font-bold text-xl">Sports News</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {sportNewsData.map((item, index) => (
                        <Link
                            key={index}
                            href="#"
                            className="bg-white p-5 rounded-xl group space-y-2 border border-gray-200 hover:shadow-lg transition"
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
                            <p className="text-sm text-gray-600">{item.description}</p>
                            <h2 className="text-sm text-gray-600">{item.date}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
