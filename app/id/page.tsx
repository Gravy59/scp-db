import { allSCPs } from "@/.contentlayer/generated";
import Link from "next/link";

export default function SCPArchive() {
  return (
    <ul className="max-w-4xl divide-y">
      {allSCPs
        .sort((a, b) => Number(a.id) - Number(b.id))
        .map((scp) => (
          <li key={scp._id} className="flex flex-col gap-y-2 py-5">
            <dl className="text-zinc-500 font-medium dark:text-zinc-400">
              <dd>
                <span className="before:content-[open-quote] after:content-[close-quote]">
                  {scp.alias}
                </span>
                <span className="before:mx-1 before:content-['&middot;']">
                  {scp.objectClass}
                </span>
              </dd>
            </dl>
            <Link href={scp.slug}>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                SCP-{scp.id}
              </h2>
            </Link>
            <div className="text-zinc-500 dark:text-zinc-400">
              {scp.summary}
            </div>
            <Link
              className="text-orange-700 font-medium after:mx-1 after:content-['→']"
              href={scp.slug}
            >
              Access
            </Link>
          </li>
        ))}
    </ul>
  );
}
