import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="h-screen w-full overflow-hidden p-10 flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <section className="grid grid-cols-2 gap-0">
        <div className="h-[120vh] w-[150vh] p-10 rounded-lg flex flex-col justify-center">
          <h1 className="text-6xl font-bold font-sans pb-5">Contact Us</h1>
          <p className="text-2xl font-sans mt-1.5">Feel free to contact us</p>
        </div>
        <div className="h-[120vh] w-[100vh] p-0 flex justify-center items-center">
          <p className="text-3xl font-sans">You can reach to us using our email or phone. Email: officialsayantannandi@gmail.com | Phone: +91 8404920213</p>
        </div>
      </section>
    </main>
  );
}