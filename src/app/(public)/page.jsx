import MainSection from "@/app/components/sections/public/home/mainSection"
import Statistics from "@/app/components/sections/public/home/statistics"
import HotNews from "@/app/components/sections/public/home/hotNews"
import SportNews from "@/app/components/sections/public/home/sportNews"
import PoliticNews from "@/app/components/sections/public/home/politicNews"
import Carousels from "@/app/components/sections/public/home/carousels"
import Subscribe from "@/app/components/sections/public/home/subscribe"

export default function Home() {
  return (
    <div className="scroll-smooth">
      <section id="home">
        <MainSection />
      </section>

      <section>
        <Statistics />
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

      <section>
        <Carousels />
      </section>

      <section>
        <Subscribe />
      </section>
    </div>
  )
}
