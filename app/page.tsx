import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full flex justify-center">
          <Image
            className=""
            src="/logo.png"
            alt="Hoa UI logo"
            width={200}
            height={79}
            priority
          />
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center w-full flex-col sm:flex-row">
          <Button>
            <a
              href="https://www.dovanminhan.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              About the author
            </a>
          </Button>
          <Button loading className="w-full">
            <a
              href="https://www.dovanminhan.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Loading
            </a>
          </Button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/AnJayDo/hoa-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
      </footer>
    </div>
  );
}
