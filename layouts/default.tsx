import { Link } from "@heroui/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://www.youtube.com/watch?v=MjR4iDkz3ic&pp=ygUuZGVycmljayByb3NlIGhpZ2hsaWdodHMgdGhhdCB3aWxsIG1ha2UgeW91IGNyeQ%3D%3D"
          title="heroui.com homepage"
        >
          <span className="text-default-600">Made with ❤️ by austin</span>

        </Link>
      </footer>
    </div>
  );
}
