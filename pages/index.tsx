import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full px-10 py-12">
        <p className="w-[44rem] text-6xl font-semibold leading-tight tracking-wide">
          Your Partner in Crafting Impactful Resumes
        </p>
        <p className="mt-6 w-4/5 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet,
          consectetur adipiscing.
        </p>
        <button className="btn mt-6 w-40">Start</button>
        <img
          className="mt-6 h-[40rem] w-full"
          src="https://picsum.photos/900/400"
          alt=""
        />
        <section className="mt-12 flex">
          <img
            className="h-[20rem] w-1/2 object-cover"
            src="https://picsum.photos/400/300"
            alt=""
          />
          <div className="flex w-1/2 flex-col items-start space-y-8 px-20">
            <p className="text-4xl leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing{' '}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ed do{' '}
            </p>
            <button className="btn mt-6 w-40">Start</button>
          </div>
        </section>
        <section className="mt-16 flex">
          <div className="flex w-1/2 flex-col items-start space-y-8 px-20">
            <p className="text-4xl leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing{' '}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ed do{' '}
            </p>
            <button className="btn mt-6 w-40">Start</button>
          </div>
          <img
            className="h-[20rem] w-1/2 object-cover"
            src="https://picsum.photos/400/300"
            alt=""
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
