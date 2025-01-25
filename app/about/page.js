import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen w-full overflow-hidden p-10 flex flex-col lg:flex-row justify-between items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
        <div className="h-auto lg:h-[120vh] w-full lg:w-[150vh] p-10 rounded-lg flex flex-col justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold font-sans pb-5">About Us</h1>
          <p className="text-xl lg:text-2xl font-sans mt-1.5">Know more about us</p>
        </div>
        <div className="h-auto lg:h-[120vh] w-full lg:w-[100vh] p-0 flex justify-center items-center">
          <p className="text-xl lg:text-3xl font-sans">Smallr is a URL shortener that makes it easy to create, share, and manage short links. Create your own custom short links with Smallr. It is created by Sayantan Nandi, a student of FY BTech CS at SIT Pune. Smallr is easy to use and free to use. Try it now!</p>
        </div>
      </section>
    </main>
  );
}