import Hero from "@/components/Hero";
import TextOpacityOnScroll from "@/components/textOpacityOnScroll/TextOpacityOnScroll";

export default function Home() {
  return (
    <main className=" bg-black text-white ">
      <Hero />
      <TextOpacityOnScroll />
      <Hero />
    </main>
  );
}
