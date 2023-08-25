import Hero from "@/components/Hero";
import ScrollSection from "@/components/horizontalScroll/ScrollSection";

export default function Home() {
  return (
    <main className=" bg-black text-white ">
      <Hero />
      <ScrollSection />
      <Hero />
    </main>
  );
}
