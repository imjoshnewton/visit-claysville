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
      <div style={{ padding: "0 80px 80px", background: "var(--paper)" }}>
        <Timeline />
      </div>
      <EventBoard />
      <McGuffey />
      <Attractions />
      <Directory />
      <Municipalities />
    </div>
  );
}
