import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <HeroSection />
      {/* <h1>Home</h1>
      <Image
        src="/images/nextjs.svg"
        alt="Next.js logo"
        width={500}
        height={500}
      /> */}
    </main>
  );
}
