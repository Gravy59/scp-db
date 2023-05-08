import { notFound } from "next/navigation";
import { allSCPs } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";

interface SCPProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: SCPProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allSCPs.find((scp) => scp.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: SCPProps): Promise<Metadata> {
  const scp = await getPostFromParams(params);

  if (!scp) {
    return {};
  }

  return {
    title: `SCP-${scp.id} | SCiPNET`,
    description: scp.summary,
  };
}

export async function generateStaticParams(): Promise<SCPProps["params"][]> {
  return allSCPs.map((scp) => ({
    slug: scp.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: SCPProps) {
  const scp = await getPostFromParams(params);

  if (!scp) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert prose-zinc">
      <h1 className="mb-2">SCP-{scp.id}</h1>

      <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
        <span className="before:content-[open-quote] after:content-[close-quote]">
          {scp.alias}
        </span>
        <span className="before:mx-1 before:content-['·']">
          {scp.objectClass}
        </span>
      </p>

      <hr className="my-4" />
      <Mdx code={scp.body.code} />
    </article>
  );
}
