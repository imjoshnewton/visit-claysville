import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Categories } from "@/components/categories";
import { HistoryIntro, Timeline } from "@/components/timeline";
import { EventBoard } from "@/components/event-board";
import { McGuffey } from "@/components/mcguffey";
import { Attractions } from "@/components/attractions";
import { Directory } from "@/components/directory";
import { Municipalities } from "@/components/municipalities";

export default function Home() {
  return (
    <div className="fade-up">
      <Hero />
      <Marquee />
      <Categories />
      <HistoryIntro />
      <div style={{ background: "var(--paper)" }}>
        <div className="section-inner" style={{ paddingBottom: 80 }}>
          <Timeline />
        </div>
      </div>
      <EventBoard />
      <McGuffey />
      <Attractions />
      <Directory />
      <Municipalities />
    </div>
  );
}
