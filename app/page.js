import Hero from "@/components/Hero";
import Links from "@/components/Links";
import ScrollSection from "@/components/ScrollSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white flex items-center justify-start flex-col gap-6 p-10">
      <h1 className="absolute top-4 left-1/2 -translate-x-1/2 text-3xl font-extralight underline-offset-4 underline">GSAP Animations</h1>
      <Links />
    </main>
  )
}
