import MainSection from "@/app/components/sections/public/home/mainSection"
import HotNews from "@/app/components/sections/public/home/hotNews"
import SportNews from "@/app/components/sections/public/home/sportNews"
import PoliticNews from "@/app/components/sections/public/home/politicNews"

export default function Home() {
  return (
    <div className="scroll-smooth">
      <section id="home">
        <MainSection />
      </section>

      <section id="hot-news">
        <HotNews />
      </section>

      <section id="sport-news">
        <SportNews />
      </section>

      <section id="politic-news">
        <PoliticNews />
      </section>
    </div>
  )
}
