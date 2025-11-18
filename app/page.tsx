import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Menu />
      <Location />
      <Footer />
    </main>
  );
}
