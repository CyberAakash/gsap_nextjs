import Hero from "@/components/Hero";
import ZoomScrollSection from "@/components/zoom/ZoomScrollSection";

export default function Home() {
  return (
    <main className=" bg-black text-white ">
      <Hero />
      <ZoomScrollSection />
      <Hero />
    </main>
  );
}
