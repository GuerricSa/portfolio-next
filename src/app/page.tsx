import Image from "next/image";
import ButtonClient from "@/components/atoms/ButtonClient";
import Link from "@/components/atoms/Link";

export default function Home() {
  return (
    <div className="container grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ButtonClient
          label='text Button'
          href='https://guerric-sant.com'
          variant='primary'
        />
        <Link
          href='https://guerric-sant.com'
          variant='primary'
          hoverColor='tertiary'
          isExternal={true}
          ariaLabel="Visiter le site de Guerric Sant"
          isSvg={true}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="group-hover:fill-tertiary transition-[fill] duration-300 ease-in-out" d="M18.27 6.96003C18.63 5.67003 18.09 4.26003 18.06 4.17003C17.97 3.96003 17.76 3.78003 17.52 3.78003C17.46 3.78003 16.08 3.66003 14.7 4.71003C13.62 4.50003 12.39 4.44003 12.33 4.44003C12.3 4.44003 12.3 4.44003 12.27 4.44003C12.21 4.44003 10.98 4.50003 9.90004 4.71003C8.52004 3.66003 7.14004 3.78003 7.08004 3.78003C6.84004 3.81003 6.63004 3.96003 6.54004 4.17003C6.51004 4.23003 5.94004 5.67003 6.33004 6.96003C5.64004 7.92003 5.10004 9.18003 5.58004 11.43C6.03004 13.47 7.71004 14.61 9.45004 15C9.30004 15.42 9.24004 15.93 9.18004 16.47C8.46004 16.5 8.01004 16.08 7.38004 15.42C6.84004 14.85 6.24004 14.19 5.25004 13.98C4.92004 13.89 4.59004 14.1 4.50004 14.46C4.44004 14.82 4.65004 15.15 5.01004 15.21C5.58004 15.33 5.97004 15.75 6.45004 16.26C7.08004 16.92 7.80004 17.73 9.09004 17.73H9.12004C9.12004 18.42 9.18004 19.08 9.21004 19.62C9.24004 19.98 9.54004 20.22 9.90004 20.19C10.26 20.16 10.5 19.86 10.47 19.5C10.29 17.46 10.44 15.3 10.77 15C11.01 14.85 11.16 14.58 11.07 14.28C11.01 14.01 10.77 13.8 10.47 13.8C10.2 13.8 7.38004 13.65 6.84004 11.16C6.39004 9.12003 6.96004 8.22003 7.56004 7.50003C7.71004 7.32003 7.74004 7.05003 7.65004 6.81003C7.41004 6.30003 7.50004 5.58003 7.62004 5.10003C8.04004 5.16003 8.67004 5.34003 9.33004 5.91003C9.48004 6.06003 9.69004 6.09003 9.90004 6.06003C10.83 5.82003 12.09 5.76003 12.3 5.76003C12.48 5.76003 13.77 5.82003 14.7 6.06003C14.91 6.12003 15.12 6.06003 15.27 5.91003C15.93 5.34003 16.59 5.16003 16.98 5.10003C17.1 5.55003 17.19 6.27003 16.95 6.81003C16.86 7.02003 16.89 7.29003 17.04 7.50003C17.64 8.22003 18.18 9.12003 17.76 11.16C17.22 13.65 14.4 13.8 14.07 13.83C13.77 13.83 13.53 14.04 13.47 14.31C13.41 14.58 13.53 14.88 13.77 15.03C14.13 15.33 14.28 17.46 14.1 19.53C14.07 19.89 14.34 20.19 14.67 20.22C14.7 20.22 14.7 20.22 14.73 20.22C15.06 20.22 15.33 19.98 15.36 19.65C15.48 18.33 15.57 16.29 15.15 15C16.89 14.64 18.57 13.47 19.02 11.43C19.5 9.18003 18.99 7.92003 18.27 6.96003Z" fill="#F7F2E8"/>
          </svg>
        </Link>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em] text-tertiary">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto text-tertiary"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
