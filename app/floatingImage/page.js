import Hero from "@/components/Hero";
import FloatingImage from "@/components/floatingImage/FloatingImage";

export default function Home() {
  return (
    <main className=" bg-black text-white ">
      <Hero />
      <FloatingImage />
      <Hero />
    </main>
  );
}
