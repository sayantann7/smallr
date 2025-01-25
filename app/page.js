import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-full overflow-hidden p-10 flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <section className="flex justify-between items-center">
        <div className="h-[100vh] w-[120vh] p-10 rounded-lg flex flex-col justify-center ">
          <h1 className="text-7xl font-bold font-sans pb-5">Welcome to Smallr</h1>
          <p className="text-3xl font-sans mt-2.5">Smallr is the best URL shortener for your needs.</p>
          <p className="text-3xl font-sans">It is easy to use and free to use. Try it now!</p>
          <li className='flex gap-3'>
          <Link className="mt-7" href='/shorten'><button className='bg-blue-700 text-white shadow-lg p-2 rounded-lg text-3xl'>Try Now</button></Link>
          <Link className="mt-7" target="_blank" href='https://github.com/sayantann7/smallr.git'><button className='bg-blue-700 text-white shadow-lg p-2 rounded-lg text-3xl'>GitHub</button></Link>
        </li>
        </div>
        <div className="h-[100vh] w-[100vh] flex justify-center items-center">
          <Image className="object-cover" alt="Smallr" src="/vector.png" width={500} height={500} />
        </div>
      </section>
    </main>
  );
}
