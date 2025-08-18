"use client"

export default function Subscribe() {
    return (
        <div className="flex justify-center p-5 mt-5 bg-gray-50">
            <div className="w-full max-w-[1300px] flex flex-col md:flex-row items-center justify-between gap-5 p-5 bg-white rounded-xl border border-gray-200">

                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
                    <p className="text-gray-600">
                        Get the latest news, updates, and stories delivered straight to your inbox.
                    </p>
                </div>

                <form className="flex flex-col sm:flex-row items-center gap-3 flex-1 md:max-w-md w-full">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-black/80 transition cursor-pointer"
                    >
                        Subscribe
                    </button>
                </form>

            </div>
        </div>
    )
}
