import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Sintony } from 'next/font/google';

const sintony = Sintony({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className={`z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex ${sintony.className}`}
      >
        <Navbar />
      </div>

      <div>
        <h1>Hello World!</h1>
      </div>

      <footer
        className={`mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left ${sintony.className}`}
      >
        <Footer />
      </footer>
    </main>
  );
}
