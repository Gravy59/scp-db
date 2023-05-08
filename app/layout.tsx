import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SCiPNet Direct Access Terminal",
  description: "A curation of the SCP Foundation's Greatest SCPs",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="antialiased h-full scroll-smooth">
      <body
        className={`min-h-full flex flex-col px-4 items-center bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 ${inter.className}`}
      >
        <header className="flex justify-center items-center py-10">
          <a className="flex gap-x-5 flex-row items-center" href="/">
            <svg
              className="fill-zinc-900 dark:fill-zinc-50"
              width={80}
              xmlns="http://www.w3.org/2000/svg"
              x={0}
              y={0}
              baseProfile="tiny"
              overflow="visible"
              version="1.2"
              viewBox="0 0 2215 2080"
              xmlSpace="preserve"
            >
              <g>
                <path d="M1147.5 800V346h-80v454h-85l125 250 125-250z" />
                <path d="M836.353 1200.359l-393.176 227 40 69.282 393.176-227 42.5 73.612L1072.859 1110l-279.006 16.747z" />
                <path d="M1338.647 1269.641l393.176 227 40-69.282-393.176-227 42.5-73.612L1142.141 1110l154.006 233.253z" />
              </g>
              <path d="M2214.968 1351.81l-124.955-139.668A999.156 999.156 0 002097.5 1090c0-410.044-249.298-761.844-604.587-912.15L1434.5 0h-654l-58.413 177.85C366.797 328.157 117.5 679.957 117.5 1090a999.14 999.14 0 007.487 122.142L.032 1351.81l327 566.38 183.471-38.388C676.475 2005.454 883.28 2080 1107.5 2080s431.025-74.546 596.997-200.198l183.47 38.388 327-566.38zm-531.957 442.592C1526.276 1922.892 1325.886 2000 1107.5 2000c-218.387 0-418.777-77.109-575.513-205.6l-164.173 34.427-270-467.654 112.3-125.418c-7.632-47.459-11.614-96.14-11.614-145.755 0-389.045 243.871-721.064 586.922-851.22L837.5 80h540l52.067 158.776C1772.624 368.929 2016.5 700.95 2016.5 1090c0 49.618-3.983 98.302-11.616 145.764l112.302 125.41-270 467.653-164.175-34.425z" />
              <path d="M1107.5 440c-358.985 0-650 291.015-650 650s291.015 650 650 650 650-291.015 650-650-291.015-650-650-650zm0 1180c-292.71 0-530-237.29-530-530s237.29-530 530-530 530 237.29 530 530-237.29 530-530 530z" />
            </svg>
            <div>
              <h1 className="m-0 text-4xl font-extrabold leading-none md:text-6xl text-zinc-900 dark:text-zinc-50">
                SCP Foundation
              </h1>
              <h2 className="m-0 text-base font-medium leading-none uppercase md:text-xl text-zinc-900 dark:text-zinc-50">
                Secure, Contain, Protect
              </h2>
            </div>
          </a>
        </header>

        <main className="flex-auto h-full">{children}</main>
        <footer className="pt-16 pb-4 text-sm text-zinc-500 dark:text-zinc-300">
          Unless otherwise stated, the content of this page is licensed under
          the{" "}
          <a
            className="underline"
            href="http://creativecommons.org/licenses/by-sa/3.0/"
          >
            Creative Commons Attribution-ShareAlike 3.0 License
          </a>
          .
        </footer>
      </body>
    </html>
  );
}
