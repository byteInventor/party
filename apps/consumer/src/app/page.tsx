import Blog from "@/components/Blog";
import Brands from "@/components/Gallery";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eco Farm School",
  description: "This is Home for Eco Farm School",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Video />
      <Hero />
      <Brands />
      <Features />
      <Blog />
      <Testimonials />
    </>
  );
}
