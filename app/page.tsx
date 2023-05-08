import Link from "next/link";

export default function Home() {
  return (
    <div className="prose md:prose-lg prose-hr:my-2 prose-hr:border-t-2 prose-p:my-0 prose-headings:mb-0 lg:prose-xl dark:prose-invert">
      <p className="text-red-900 font-medium dark:text-red-700">
        Warning: the SCP Foundation database is
      </p>
      <h1 className="text-red-900 dark:text-red-700">CLASSIFIED</h1>
      <p className="text-red-900 font-medium dark:text-red-700">
        Access by unauthorized personnel is strictly prohibited.
      </p>
      <p className="text-red-900 font-medium dark:text-red-700">
        Perpetrators will be tracked, located, and detained.
      </p>
      <hr />
      <p className="font-medium">Submit for retinal identification...</p>

      <p className="font-bold text-green-700">Welcome, Dr. Wineland.</p>
      <Link className="block mt-5 mb-2" href="/id">
        Access archives
      </Link>
      <Link className="block" href="/orientation">
        !! Please complete your orientation !!
      </Link>
    </div>
  );
}
