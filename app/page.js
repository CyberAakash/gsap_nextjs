import Hero from "@/components/Hero";
import Links from "@/components/Links";
import ScrollSection from "@/components/horizontalScroll/ScrollSection";

export default function Home() {
  return (
    <main className="relative min-h-screen h-fit bg-black text-white flex items-center justify-start flex-col gap-6 p-10 overflow-x-hidden">
      <h1 className="text-7xl lg:text-9xl font-black w-full text-center text-transparent bg-clip-text bg-gradient-to-br from-violet-500 via-sky-400 to-green-300">GSAP Animations</h1>
      <Links />
    </main>
  )
}
