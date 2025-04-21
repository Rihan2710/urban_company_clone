import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Oops!</h1>
          <div className="text-8xl font-bold mb-6">404</div>
          <p className="text-lg mb-8">
            We&apos;re sorry, we couldn&apos;t find what you were looking for!
          </p>
          <div className="flex justify-center">
            <Link href="/">
              <Button className="bg-[#22212a] hover:bg-[#3a3949] text-white">
                Return to homepage
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
