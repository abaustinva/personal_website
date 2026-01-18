import { Link } from "@heroui/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { BackgroundBlob } from "@/components/BackgroundBlob";

interface DefaultLayoutProps {
  children: React.ReactNode;
  showContent?: boolean;
}

export default function DefaultLayout({
  children,
  showContent = true,
}: DefaultLayoutProps) {
  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      {/* Animated Liquid Background Layer */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <BackgroundBlob
          className="top-0 left-0 w-96 h-96 bg-purple-500"
          style={{ animationDelay: "0s" }}
        />
        <BackgroundBlob
          className="top-1/2 right-0 w-80 h-80 bg-blue-500"
          style={{ animationDelay: "2s" }}
        />
        <BackgroundBlob
          className="bottom-0 left-1/4 w-96 h-96 bg-pink-500"
          style={{ animationDelay: "4s" }}
        />
        <BackgroundBlob
          className="-top-20 right-1/4 w-72 h-72 bg-indigo-500"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <Head />
      <Navbar showContent={showContent} />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16 relative z-10">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3 relative z-10">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://www.youtube.com/watch?v=MjR4iDkz3ic&pp=ygUuZGVycmljayByb3NlIGhpZ2hsaWdodHMgdGhhdCB3aWxsIG1ha2UgeW91IGNyeQ%3D%3D"
          title="heroui.com homepage"
        >
          <span className="text-default-600">made with ❤️ by austin</span>
        </Link>
      </footer>
    </div>
  );
}
