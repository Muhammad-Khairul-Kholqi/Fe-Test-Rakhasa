import PublicNavbar from "@/app/components/global/publicNavbar"
import Footer from "../components/global/footer"

export default function LayoutPublic({children}) {
    return (
        <div>
            <PublicNavbar />
            <div className="mt-[63px]">
                {children}
            </div>
            <Footer />
        </div>
    )
}