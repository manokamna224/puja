import EventSlider from "@/components/EventSlider";
import FeatureGrid from "@/components/featured-grid";
import PujaSection from '@/components/PujaSection'

// app/page.js
export default function Home() {
  return (
    <section className="md:p-8 p-4 text-center">
      <div>
      <h1 className="xl:text-4xl text-2xl font-bold text-red-700 ">Welcome to Puja Nivaran</h1>
      <p className="xl:text-md text-xs text-black/90">Experience the rituals with Puja Nivaran.</p>
      </div>
      <EventSlider />
      <FeatureGrid />
    </section>
  );
}
